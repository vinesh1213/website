"use client";

import { Button } from "../atoms/Button";

interface ChartSwitcherProps {
  selected: "bar" | "line" | "pie";
  onChange: (type: "bar" | "line" | "pie") => void;
}

export function ChartSwitcher({ selected, onChange }: ChartSwitcherProps) {
  const chartTypes = ["bar", "line", "pie"] as const;

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Chart Type</label>
      <div className="flex gap-2 flex-wrap">
        {chartTypes.map((type) => (
          <Button
            key={type}
            onClick={() => onChange(type)}
            variant={selected === type ? "primary" : "secondary"}
            size="md"
          >
            {type.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}
