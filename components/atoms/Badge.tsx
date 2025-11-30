"use client";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error";
  children: React.ReactNode;
}

export function Badge({ variant = "default", children }: BadgeProps) {
  const variantStyles = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
