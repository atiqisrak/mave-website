import React from "react";
import SocialLink from "./SocialLink";

function FooterColumn({ title, links, socialLinks }) {
  return (
    <div className="flex flex-col items-start text-2xl text-white max-md:mt-10">
      <h3 className="font-bold text-sky-500 uppercase">{title}</h3>
      {links &&
        links.map((link, index) => (
          <a key={index} href="#" className="mt-4 hover:underline">
            {link}
          </a>
        ))}
      {socialLinks &&
        socialLinks.map((social, index) => (
          <SocialLink key={index} {...social} />
        ))}
    </div>
  );
}

export default FooterColumn;
