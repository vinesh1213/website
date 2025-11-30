"use client";

import { Input } from "../atoms/Input";

interface ThresholdFilterProps {
  threshold: number;
  setThreshold: (value: number) => void;
}

export function ThresholdFilter({ threshold, setThreshold }: ThresholdFilterProps) {
  return (
    <div>
      <Input
        label="Minimum Sales Threshold"
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        placeholder="Enter minimum sales (e.g., 30000)"
      />
    </div>
  );
}
