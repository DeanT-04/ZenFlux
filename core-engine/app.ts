// core-engine/app.ts
import express, { Request, Response, NextFunction, Application } from 'express';
import axios from 'axios';

const app: Application = express();
app.use(express.json());

interface User {
  id: string;
  credits: number;
}

const users: User[] = [
  { id: 'user123', credits: 1000 }
];

// API Gateway middleware
const apiGateway = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Verify API key exists
    const apiKey = req.header('x-api-key');
    if (!apiKey) return res.status(401).json({ error: 'Missing API key' });

    const user = users.find(u => u.id === apiKey);
    if (!user) return res.status(401).json({ error: 'Invalid API key' });
    if (user.credits <= 0) return res.status(402).json({ error: 'Insufficient credits' });

    // Get full URL path after /proxy/
    const targetPath = req.path.replace('/proxy/', '');
    const targetUrl = `https://${targetPath}`;

    // Add error handling for invalid URLs
    if (!targetPath.startsWith('jsonplaceholder.typicode.com')) {
      return res.status(400).json({ error: 'Unsupported API endpoint' });
    }

    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: {
        ...req.headers,
        host: 'jsonplaceholder.typicode.com', // Fix SSL validation
        'x-api-key': undefined
      },
      httpsAgent: new (require('https').Agent)({  
        rejectUnauthorized: false // Bypass SSL verification (TEMPORARY)
      })
    });

    user.credits -= 1;
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'External API call failed' });
  }
};

app.all('/proxy/*', (req: Request, res: Response, next: NextFunction) => {
  apiGateway(req, res, next).catch(next);
});

app.get('/credits', (req: Request, res: Response) => {
  const apiKey = req.header('x-api-key');
  const user = users.find(u => u.id === apiKey);
  res.json({ credits: user?.credits ?? 0 });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});