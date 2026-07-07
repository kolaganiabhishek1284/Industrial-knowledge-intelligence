import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", uploads: 10 },
  { month: "Feb", uploads: 18 },
  { month: "Mar", uploads: 25 },
  { month: "Apr", uploads: 35 },
  { month: "May", uploads: 48 },
  { month: "Jun", uploads: 60 },
];

export default function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="uploads"
          stroke="#2563eb"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}