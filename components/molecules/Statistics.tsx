"use client";

import { StatBox } from "../atoms/StatBox";

interface StatisticsProps {
  totalSales: number;
  totalRevenue: number;
  totalUnits: number;
  avgSales: number;
}

export function Statistics({
  totalSales,
  totalRevenue,
  totalUnits,
  avgSales,
}: StatisticsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <StatBox
        label="Total Sales"
        value={`$${totalSales.toLocaleString()}`}
        variant="blue"
      />
      <StatBox
        label="Total Revenue"
        value={`$${(totalRevenue / 1000).toFixed(0)}K`}
        variant="green"
      />
      <StatBox
        label="Units Sold"
        value={totalUnits.toLocaleString()}
        variant="purple"
      />
      <StatBox
        label="Avg Sales"
        value={`$${avgSales.toLocaleString()}`}
        variant="amber"
      />
    </div>
  );
}
