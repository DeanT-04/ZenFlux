// ui/src/App.tsx
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import ApiNode from './components/ApiNode';
import { WorkflowNode, WorkflowEdge } from './hooks/userWorkflow';

// Define node types
const nodeTypes = {
  api: ApiNode,
};

// Initial nodes with proper typing
const initialNodes: WorkflowNode[] = [
  { 
    id: '1', 
    position: { x: 0, y: 0 }, 
    data: { label: 'Trigger' },
    type: 'input'
  },
  { 
    id: '2', 
    position: { x: 200, y: 0 }, 
    data: { 
      label: 'API Call',
      url: '/proxy/jsonplaceholder.typicode.com/todos/1' 
    },
    type: 'api'
  },
];

const initialEdges: WorkflowEdge[] = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}