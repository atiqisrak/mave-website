import React from "react";

function Button({ variant, label }) {
  const baseClasses = "px-6 py-2 font-medium";
  const variantClasses = {
    primary: "text-white rounded-3xl bg-neutral-800",
    text: "text-neutral-800",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} max-md:px-5`}>
      {label}
    </button>
  );
}

export default Button;
