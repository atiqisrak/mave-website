import React from "react";

function SocialLink({ name, icon }) {
  return (
    <a href="#" className="flex gap-3 mt-4 whitespace-nowrap hover:underline">
      <img
        loading="lazy"
        src={icon}
        alt={`${name} icon`}
        className="object-contain shrink-0 my-auto aspect-square w-[23px]"
      />
      <span>{name}</span>
    </a>
  );
}

export default SocialLink;
