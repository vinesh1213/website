"use client";

import { Button } from "../atoms/Button";

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  years?: number[];
}

export function YearSelector({
  selectedYear,
  onYearChange,
  years = [2022, 2023, 2024],
}: YearSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Select Year</label>
      <div className="flex gap-2 flex-wrap">
        {years.map((year) => (
          <Button
            key={year}
            onClick={() => onYearChange(year)}
            variant={selectedYear === year ? "primary" : "secondary"}
            size="md"
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
