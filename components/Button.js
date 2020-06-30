import React from "react";

export default function Button({ secondary, loading, disabled, ...props }) {
  return (
    <>
      <button {...props} disabled={loading || disabled} />
      <style jsx>{`
        button {
          width: 100%;
          border: none;
          background: ${secondary ? "var(--foreground)" : "var(--button)"};
          color: var(--background);
          padding: 1rem;
          border-radius: var(--inner-border-radius);
          font-size: 1.25rem;
          font-weight: bold;
          cursor: pointer;
        }

        button[disabled] {
          pointer-events: none;
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}
