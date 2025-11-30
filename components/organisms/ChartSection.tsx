"use client";

import dynamic from "next/dynamic";
import { Card } from "../atoms/Card";
import { SalesRecord } from "../mockData";

const SalesChart = dynamic(() => import("../SalesChart"), { ssr: false });

interface ChartSectionProps {
  data: SalesRecord[];
  chartType: "bar" | "line" | "pie";
  title?: string;
}

export function ChartSection({
  data,
  chartType,
  title = "Sales Analysis",
}: ChartSectionProps) {
  return (
    <Card title={title} className="mb-8">
      <SalesChart data={data} chartType={chartType} />
    </Card>
  );
}
