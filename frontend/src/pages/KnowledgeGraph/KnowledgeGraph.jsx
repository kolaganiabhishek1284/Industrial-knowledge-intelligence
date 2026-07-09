import { useEffect, useState } from "react";
import {
  Network,
  Search,
  RefreshCw,
  Database,
  Activity,
} from "lucide-react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import api from "../../services/api";

export default function KnowledgeGraph() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadGraph();
  }, []);

  async function loadGraph() {
    try {
      const res = await api.get("/knowledge/");

      const graphNodes = (res.data.nodes || []).map((node, index) => ({
        id: String(node.id),
        data: {
          label: node.label,
        },
        position: {
          x: (index % 4) * 260,
          y: Math.floor(index / 4) * 170,
        },
        style: {
          background: "#2563EB",
          color: "white",
          borderRadius: 14,
          border: "none",
          padding: 12,
          fontWeight: 600,
          minWidth: 140,
          textAlign: "center",
        },
      }));

      const graphEdges = (res.data.edges || []).map((edge, index) => ({
        id: `edge-${index}`,
        source: String(edge.source),
        target: String(edge.target),
        animated: true,
        style: {
          stroke: "#38BDF8",
          strokeWidth: 2,
        },
      }));

      setNodes(graphNodes);
      setEdges(graphEdges);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="fade-in">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="page-title">
            Knowledge Graph
          </h1>

          <p className="page-subtitle">
            Interactive visualization of industrial knowledge extracted from uploaded documents.
          </p>

        </div>

        <button
          onClick={loadGraph}
          className="bg-blue-600 hover:bg-blue-700 rounded-xl px-5 py-3 flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Refresh
        </button>

      </div>

      <div className="grid xl:grid-cols-4 gap-6 mb-6">

        <div className="card p-5">

          <div className="flex items-center gap-3">

            <Network className="text-blue-400" />

            <div>

              <p className="text-slate-400 text-sm">
                Nodes
              </p>

              <h2 className="text-3xl font-bold">
                {nodes.length}
              </h2>

            </div>

          </div>

        </div>

        <div className="card p-5">

          <div className="flex items-center gap-3">

            <Database className="text-green-400" />

            <div>

              <p className="text-slate-400 text-sm">
                Relationships
              </p>

              <h2 className="text-3xl font-bold">
                {edges.length}
              </h2>

            </div>

          </div>

        </div>

        <div className="card p-5">

          <div className="flex items-center gap-3">

            <Activity className="text-cyan-400" />

            <div>

              <p className="text-slate-400 text-sm">
                Graph Status
              </p>

              <h2 className="text-xl font-bold text-green-400">
                Active
              </h2>

            </div>

          </div>

        </div>

        <div className="card p-5">

          <div className="flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-3">

            <Search className="text-slate-400" />

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent flex-1 text-white placeholder:text-slate-500"
            />

          </div>

        </div>

      </div>

      <div className="card overflow-hidden">

        <div
          style={{
            width: "100%",
            height: "78vh",
          }}
        >

          <ReactFlow
            nodes={nodes.filter((n) =>
              n.data.label
                .toLowerCase()
                .includes(search.toLowerCase())
            )}
            edges={edges}
            fitView
          >

            <MiniMap />

            <Controls />

            <Background
              gap={18}
              color="#334155"
            />

          </ReactFlow>

        </div>

      </div>

    </div>
  );
}