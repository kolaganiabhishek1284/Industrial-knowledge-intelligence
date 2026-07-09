import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  BarChart3,
  TrendingUp,
  Brain,
  Activity,
  FileText,
  Database,
  Download,
} from "lucide-react";

const uploadData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 25 },
  { month: "Apr", value: 38 },
  { month: "May", value: 46 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 75 },
];

const aiData = [
  { name: "Chat", value: 45 },
  { name: "OCR", value: 25 },
  { name: "Knowledge", value: 20 },
  { name: "Reports", value: 10 },
];

const colors = [
  "#2563EB",
  "#10B981",
  "#9333EA",
  "#F59E0B",
];

const usage = [
  { name: "Mon", value: 22 },
  { name: "Tue", value: 31 },
  { name: "Wed", value: 28 },
  { name: "Thu", value: 41 },
  { name: "Fri", value: 48 },
  { name: "Sat", value: 37 },
  { name: "Sun", value: 58 },
];

export default function Analytics() {
  return (
    <div className="fade-in">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="page-title">
            Enterprise Analytics
          </h1>

          <p className="page-subtitle">
            AI Insights & Industrial Intelligence
          </p>

        </div>

        <button
          className="
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          px-6
          py-3
          rounded-xl
          "
        >
          <Download size={18} />
          Export Report
        </button>

      </div>

      <div className="grid xl:grid-cols-4 gap-6 mb-8">

        <div className="card p-6">

          <BarChart3
            size={42}
            className="text-blue-400 mb-4"
          />

          <h2 className="text-4xl font-bold">
            245
          </h2>

          <p className="text-slate-400">
            Documents
          </p>

        </div>

        <div className="card p-6">

          <Brain
            size={42}
            className="text-purple-400 mb-4"
          />

          <h2 className="text-4xl font-bold">
            1620
          </h2>

          <p className="text-slate-400">
            AI Queries
          </p>

        </div>

        <div className="card p-6">

          <TrendingUp
            size={42}
            className="text-green-400 mb-4"
          />

          <h2 className="text-4xl font-bold">
            98%
          </h2>

          <p className="text-slate-400">
            Accuracy
          </p>

        </div>

        <div className="card p-6">

          <Activity
            size={42}
            className="text-cyan-400 mb-4"
          />

          <h2 className="text-4xl font-bold">
            Healthy
          </h2>

          <p className="text-slate-400">
            System
          </p>

        </div>

      </div>

      <div className="grid xl:grid-cols-3 gap-6 mb-8">

        <div className="card p-6 xl:col-span-2">

          <h2 className="text-xl font-bold mb-6">
            Document Growth
          </h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart data={uploadData}>

              <CartesianGrid stroke="#334155" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="card p-6">

          <h2 className="text-xl font-bold mb-6">
            AI Usage
          </h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <PieChart>

              <Pie
                data={aiData}
                dataKey="value"
                outerRadius={110}
              >

                {aiData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={colors[i]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="card p-6">

          <h2 className="text-xl font-bold mb-6">
            Weekly Activity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={usage}>

              <CartesianGrid stroke="#334155" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#2563EB"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="card p-6">

          <h2 className="text-xl font-bold mb-6">
            AI Insights
          </h2>

          <div className="space-y-5">

            <div className="glass p-5 flex gap-4">

              <FileText className="text-blue-400"/>

              <div>

                <h3 className="font-bold">
                  Documents Increased
                </h3>

                <p className="text-slate-400">
                  +28% compared to last month.
                </p>

              </div>

            </div>

            <div className="glass p-5 flex gap-4">

              <Brain className="text-purple-400"/>

              <div>

                <h3 className="font-bold">
                  AI Usage
                </h3>

                <p className="text-slate-400">
                  Average response time 1.2 sec.
                </p>

              </div>

            </div>

            <div className="glass p-5 flex gap-4">

              <Database className="text-green-400"/>

              <div>

                <h3 className="font-bold">
                  Knowledge Base
                </h3>

                <p className="text-slate-400">
                  Successfully indexed all uploaded PDFs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}