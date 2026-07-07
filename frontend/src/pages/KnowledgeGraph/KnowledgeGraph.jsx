import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

export default function KnowledgeGraph() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    loadGraph();
  }, []);

  async function loadGraph() {
    try {
      const res = await api.get("/knowledge/");

      const flowNodes = res.data.nodes.map((n, i) => ({
        id: n.id,
        data: { label: n.label },
        position: {
          x: (i % 4) * 250,
          y: Math.floor(i / 4) * 180,
        },
      }));

      const flowEdges = res.data.edges.map((e, i) => ({
        id: `e${i}`,
        source: e.source,
        target: e.target,
      }));

      setNodes(flowNodes);
      setEdges(flowEdges);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MainLayout>
      <h1 style={{ marginBottom: 20 }}>
        Knowledge Graph
      </h1>

      <div
        style={{
          width: "100%",
          height: "80vh",
          background: "#fff",
          borderRadius: 20,
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </MainLayout>
  );
}