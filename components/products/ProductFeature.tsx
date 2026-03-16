"use client";

interface ProductFeatureProps {
  label: string;
}

export function ProductFeature({ label }: ProductFeatureProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-yellow-400">✦</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}