import React from "react";

function NavItem({ label, hasDropdown }) {
  return (
    <div className="flex gap-3.5 self-stretch my-auto whitespace-nowrap text-neutral-800">
      <div>{label}</div>
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/d7415f8110e17b1a46437f76d7175f7f2f2f903797ec6c764237976be1945686?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      )}
    </div>
  );
}

export default NavItem;
