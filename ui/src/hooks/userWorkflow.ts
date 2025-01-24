// ui/src/hooks/useWorkflow.ts
import axios from 'axios';
import { Node, Edge } from 'reactflow';

// Define types for workflow nodes/edges
export type WorkflowNode = Node<{
  label: string;
  url?: string;
}>;

export type WorkflowEdge = Edge;

export const useWorkflow = () => {
  const executeWorkflow = async (nodes: WorkflowNode[], edges: WorkflowEdge[]) => {
    const apiCalls = nodes.filter(node => node.type === 'api');
    
    for (const node of apiCalls) {
      if (!node.data?.url) {
        console.error('Missing URL for node:', node.id);
        continue;
      }

      await axios.get(`http://localhost:3000${node.data.url}`, {
        headers: { 'x-api-key': 'user123' }
      });
    }
  };

  return { executeWorkflow };
};