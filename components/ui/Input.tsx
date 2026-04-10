import { forwardRef } from "react";

export type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", placeholder, value, onChange, className = "", required, disabled },
    ref
  ) => {
    const base =
      "w-full bg-neutral-100 border border-neutral-200 text-sm tracking-wide placeholder:tracking-wide placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-950 transition-all duration-200 px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed";

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${base} ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
