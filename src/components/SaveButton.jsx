import React from "react";

export default function SaveButton({className} ) {
  return (
    <div>
      <svg
        className={className}
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Guardar</title>
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    </div>
  );
}
