"use client";

import { ReactNode } from "react";
import { ControlPanel } from "../organisms/ControlPanel";
import { MetricsPanel } from "../organisms/MetricsPanel";
import { ChartSection } from "../organisms/ChartSection";
import { SummarySection } from "../organisms/SummarySection";
import { SalesRecord } from "../mockData";

interface DashboardTemplateProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  chartType: "bar" | "line" | "pie";
  onChartChange: (type: "bar" | "line" | "pie") => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
  totalSales: number;
  totalRevenue: number;
  totalUnits: number;
  avgSales: number;
  chartData: SalesRecord[];
}

export function DashboardTemplate({
  selectedYear,
  onYearChange,
  chartType,
  onChartChange,
  threshold,
  onThresholdChange,
  totalSales,
  totalRevenue,
  totalUnits,
  avgSales,
  chartData,
}: DashboardTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-600">
            Analyze your sales performance with interactive charts and real-time metrics
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4">
        {/* Control Panel */}
        <ControlPanel
          selectedYear={selectedYear}
          onYearChange={onYearChange}
          chartType={chartType}
          onChartChange={onChartChange}
          threshold={threshold}
          onThresholdChange={onThresholdChange}
        />

        {/* Metrics Panel */}
        <MetricsPanel
          totalSales={totalSales}
          totalRevenue={totalRevenue}
          totalUnits={totalUnits}
          avgSales={avgSales}
        />

        {/* Chart Section */}
        <ChartSection data={chartData} chartType={chartType} />

        {/* Summary Section */}
        <SummarySection />
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2024 Sales Dashboard. Built with Next.js, React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
