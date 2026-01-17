"use client";

import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface ThresholdFilterProps {
  threshold: number;
  setThreshold: (value: number) => void;
}

export function ThresholdFilter({ threshold, setThreshold }: ThresholdFilterProps) {
  const handleReset = () => {
    setThreshold(0);
  };

  return (
    <div>
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <Input
            label="Minimum Sales Threshold"
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            placeholder="Enter minimum sales (e.g., 30000)"
          />
        </div>
        <Button
          onClick={handleReset}
          variant="secondary"
          size="md"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
