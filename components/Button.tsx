"use client";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
}