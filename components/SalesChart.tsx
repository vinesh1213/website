"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { SalesRecord } from "./mockData";

interface SalesChartProps {
  data: SalesRecord[];
  chartType: "bar" | "line" | "pie";
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function SalesChart({ data, chartType }: SalesChartProps) {
  // For pie chart, aggregate by year
  const pieData =
    data.length > 0
      ? data.reduce((acc, item) => {
          const existing = acc.find((d) => d.name === `${item.year}`);
          if (existing) {
            existing.value += item.sales;
          } else {
            acc.push({ name: `${item.year}`, value: item.sales });
          }
          return acc;
        }, [] as Array<{ name: string; value: number }>)
      : [];

  if (chartType === "bar") {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" name="Sales ($)" />
          <Bar dataKey="units" fill="#10b981" name="Units Sold" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "line") {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} name="Sales ($)" />
          <Line type="monotone" dataKey="units" stroke="#10b981" strokeWidth={2} name="Units Sold" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // Pie chart
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: $${(value as number).toLocaleString()}`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${(value as number).toLocaleString()}`} />
      </PieChart>
    </ResponsiveContainer>
  );
}
