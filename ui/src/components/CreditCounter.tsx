import axios from "axios";
import { useEffect, useState } from "react";

// ui/src/components/CreditCounter.tsx
export default function CreditCounter() {
    const [credits, setCredits] = useState(0);
  
    useEffect(() => {
      axios.get('http://localhost:3000/credits', {
        headers: { 'x-api-key': 'user123' }
      }).then(res => setCredits(res.data.credits));
    }, []);
  
    return <div>Credits remaining: {credits}</div>;
  }