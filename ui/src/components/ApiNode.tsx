// ui/src/components/ApiNode.tsx
import { NodeProps } from 'reactflow';

// Define type for node data
type ApiNodeData = {
  url: string;
  label: string;
};

export default function ApiNode({ data }: NodeProps<ApiNodeData>) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // For now, just log the change - we'll add state management later
    console.log('API URL updated:', e.target.value);
  };

  return (
    <div className="api-node" style={{ padding: 10, background: '#fff', border: '1px solid #000' }}>
      <div>API Call: {data.label}</div>
      <input 
        placeholder="Enter API URL"
        defaultValue={data.url}
        onChange={handleChange}
        style={{ width: 200 }}
      />
    </div>
  );
}