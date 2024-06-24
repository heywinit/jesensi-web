import React from "react";

export default function Button({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      className="w-max py-1 px-2 rounded-lg bg-t hover:bg-t/40"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
