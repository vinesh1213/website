"use client";

import { useState } from "react";
import { salesData } from "./mockData";
import type { SalesRecord } from "./mockData";
import { DashboardTemplate } from "./templates/DashboardTemplate";

export default function DashboardClient() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [minThreshold, setMinThreshold] = useState<number>(0);

  // Filter data by selected year
  const yearData = (salesData as SalesRecord[]).filter((d) => d.year === selectedYear);
  
  // Apply threshold filter
  const filtered = yearData.filter((d) => d.sales >= minThreshold);

  // Calculate statistics
  const totalSales = filtered.reduce((sum, d) => sum + d.sales, 0);
  const totalRevenue = filtered.reduce((sum, d) => sum + d.revenue, 0);
  const totalUnits = filtered.reduce((sum, d) => sum + d.units, 0);
  const avgSales = filtered.length > 0 ? Math.round(totalSales / filtered.length) : 0;

  return (
    <DashboardTemplate
      selectedYear={selectedYear}
      onYearChange={setSelectedYear}
      chartType={chartType}
      onChartChange={setChartType}
      threshold={minThreshold}
      onThresholdChange={setMinThreshold}
      totalSales={totalSales}
      totalRevenue={totalRevenue}
      totalUnits={totalUnits}
      avgSales={avgSales}
      chartData={filtered}
    />
  );
}
