"use client";

import { Statistics } from "../molecules/Statistics";
import { Card } from "../atoms/Card";

interface MetricsPanelProps {
  totalSales: number;
  totalRevenue: number;
  totalUnits: number;
  avgSales: number;
}

export function MetricsPanel({
  totalSales,
  totalRevenue,
  totalUnits,
  avgSales,
}: MetricsPanelProps) {
  return (
    <Card title="Key Metrics" className="mb-8">
      <Statistics
        totalSales={totalSales}
        totalRevenue={totalRevenue}
        totalUnits={totalUnits}
        avgSales={avgSales}
      />
    </Card>
  );
}
