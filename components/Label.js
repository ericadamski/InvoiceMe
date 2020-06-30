import React from "react";

export default function Label({ error, ...props }) {
  return (
    <>
      <label {...props} />
      <p className="error">{error}</p>
      <style jsx>{`
        label {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .error {
          color: var(--error);
          min-height: 1rem;
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
}
