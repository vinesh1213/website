"use client";

interface StatBoxProps {
  label: string;
  value: string | number;
  variant?: "blue" | "green" | "purple" | "amber";
  icon?: React.ReactNode;
}

export function StatBox({ label, value, variant = "blue", icon }: StatBoxProps) {
  const variantStyles = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50",
    amber: "bg-amber-50",
  };

  const variantColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
  };

  return (
    <div className={`p-4 ${variantStyles[variant]} rounded-lg`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-600">{label}</p>
        {icon && <div className="text-2xl">{icon}</div>}
      </div>
      <p className={`text-2xl font-bold ${variantColors[variant]}`}>{value}</p>
    </div>
  );
}
