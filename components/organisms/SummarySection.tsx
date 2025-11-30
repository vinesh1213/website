"use client";

import { Card } from "../atoms/Card";
import { StatBox } from "../atoms/StatBox";
import { yearlyData } from "../mockData";

export function SummarySection() {
  return (
    <Card title="Yearly Summary" className="mb-8">
      <div className="grid md:grid-cols-3 gap-4">
        {yearlyData.map((year) => (
          <div key={year.year} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{year.year}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Sales:</span> $
                {year.sales.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Revenue:</span> $
                {year.revenue.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Units:</span> {year.units.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
