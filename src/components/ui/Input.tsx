import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-gray-900">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full rounded-xl border border-gray-300
          bg-white px-4 py-3 text-sm text-black
          outline-none transition
          placeholder:text-gray-400
          focus:border-black
          ${error ? "border-red-500" : ""}
          ${className}
        `}
      />

      {error && (
        <p className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}