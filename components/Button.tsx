"use client";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
}