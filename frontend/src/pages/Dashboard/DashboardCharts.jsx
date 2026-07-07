import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 15 },
  { day: "Tue", value: 28 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 48 },
  { day: "Fri", value: 62 },
  { day: "Sat", value: 55 },
  { day: "Sun", value: 80 },
];

export default function DashboardCharts() {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 20,
        height: 350,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}