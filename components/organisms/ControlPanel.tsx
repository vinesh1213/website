"use client";

import { YearSelector } from "../molecules/YearSelector";
import { ChartSwitcher } from "../molecules/ChartSwitcher";
import { ThresholdFilter } from "../molecules/ThresholdFilter";
import { Card } from "../atoms/Card";

interface ControlPanelProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  chartType: "bar" | "line" | "pie";
  onChartChange: (type: "bar" | "line" | "pie") => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
}

export function ControlPanel({
  selectedYear,
  onYearChange,
  chartType,
  onChartChange,
  threshold,
  onThresholdChange,
}: ControlPanelProps) {
  return (
    <Card title="Dashboard Controls" className="mb-8">
      <div className="space-y-4">
        <YearSelector selectedYear={selectedYear} onYearChange={onYearChange} />
        <ChartSwitcher selected={chartType} onChange={onChartChange} />
        <ThresholdFilter threshold={threshold} setThreshold={onThresholdChange} />
      </div>
    </Card>
  );
}
