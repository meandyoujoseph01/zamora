import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-gray-200
        bg-white
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}