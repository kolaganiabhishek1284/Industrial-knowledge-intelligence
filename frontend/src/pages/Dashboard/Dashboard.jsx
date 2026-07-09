import { useEffect, useState } from "react";
import {
  FileText,
  Brain,
  Network,
  Activity,
  Upload,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Database,
  Clock,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { getAnalytics } from "../../services/dashboard";

const colors = ["#2563EB", "#10B981", "#F59E0B", "#9333EA"];

export default function Dashboard() {
  const [stats, setStats] = useState({
    documents: 0,
    knowledge_nodes: 0,
    ai_queries: 0,
    system_health: "Healthy",
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const res = await getAnalytics();
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const kpis = [
    {
      title: "Documents",
      value: stats.documents,
      icon: FileText,
      color: "#2563EB",
    },
    {
      title: "Knowledge Nodes",
      value: stats.knowledge_nodes,
      icon: Network,
      color: "#10B981",
    },
    {
      title: "AI Queries",
      value: stats.ai_queries,
      icon: Brain,
      color: "#9333EA",
    },
    {
      title: "System Health",
      value: stats.system_health,
      icon: Activity,
      color: "#EF4444",
    },
  ];

  const chartData = [
    { name: "Mon", value: 18 },
    { name: "Tue", value: 28 },
    { name: "Wed", value: 22 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 38 },
    { name: "Sat", value: 56 },
    { name: "Sun", value: 72 },
  ];

  const pieData = [
    { name: "PDF", value: 52 },
    { name: "DOCX", value: 24 },
    { name: "Excel", value: 14 },
    { name: "Other", value: 10 },
  ];

  return (
    <div className="space-y-8 fade-in">

      <div>

        <h1 className="page-title">
          Good Evening, Abhishek 👋
        </h1>

        <p className="page-subtitle">
          Industrial Knowledge Intelligence Platform
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {kpis.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="card p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-400 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-3 text-white">
                    {item.value}
                  </h2>

                </div>

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-blue"
                  style={{ background: item.color }}
                >
                  <Icon size={30} color="white" />
                </div>

              </div>

            </div>

          );

        })}

      </div>

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="card p-6 xl:col-span-2">

          <div className="flex justify-between mb-5">

            <div>

              <h2 className="text-xl font-bold">
                Knowledge Growth
              </h2>

              <p className="text-slate-400">
                Documents processed over time
              </p>

            </div>

            <TrendingUp className="text-blue-400" />

          </div>

          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <XAxis dataKey="name" stroke="#94A3B8" />
              <Tooltip />
              <Area
                dataKey="value"
                stroke="#3B82F6"
                fill="#2563EB"
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

        <div className="card p-6">

          <h2 className="text-xl font-bold mb-6">
            Document Types
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={colors[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="card p-6">

          <Upload className="text-blue-400 mb-4" />

          <h3 className="text-lg font-bold">
            Upload Documents
          </h3>

          <p className="text-slate-400 mt-2">
            Add new industrial manuals and PDFs.
          </p>

        </div>

        <div className="card p-6">

          <Cpu className="text-purple-400 mb-4" />

          <h3 className="text-lg font-bold">
            AI Assistant
          </h3>

          <p className="text-slate-400 mt-2">
            Query uploaded documents instantly.
          </p>

        </div>

        <div className="card p-6">

          <ShieldCheck className="text-green-400 mb-4" />

          <h3 className="text-lg font-bold">
            Compliance
          </h3>

          <p className="text-slate-400 mt-2">
            Monitor industrial compliance status.
          </p>

        </div>

        <div className="card p-6">

          <Database className="text-cyan-400 mb-4" />

          <h3 className="text-lg font-bold">
            Database
          </h3>

          <p className="text-slate-400 mt-2">
            Connected successfully.
          </p>

        </div>

      </div>

      <div className="card p-6">

        <div className="flex items-center gap-3 mb-6">

          <Clock className="text-yellow-400" />

          <h2 className="text-xl font-bold">
            Recent Activity
          </h2>

        </div>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Uploaded Pump_Manual.pdf</span>
            <span className="text-slate-400">2 min ago</span>
          </div>

          <div className="flex justify-between">
            <span>Knowledge Graph Updated</span>
            <span className="text-slate-400">12 min ago</span>
          </div>

          <div className="flex justify-between">
            <span>AI Summary Generated</span>
            <span className="text-slate-400">18 min ago</span>
          </div>

          <div className="flex justify-between">
            <span>Analytics Refreshed</span>
            <span className="text-slate-400">35 min ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}