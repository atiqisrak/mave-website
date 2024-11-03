import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";

const navItems = [
  { label: "Product", hasDropdown: true },
  { label: "Templates", hasDropdown: false },
  { label: "Customers", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: true },
];

function Header() {
  return (
    <header className="flex flex-col justify-center items-center self-stretch px-16 py-6 w-full text-lg bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.03)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1170px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/aa37b9233cf6f874dca0a1e9811f843bab8c30114ed00f8308fc02e9b7123a4f?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt="Company logo"
          className="object-contain shrink-0 self-start max-w-full aspect-[4.44] w-[129px]"
        />
        <nav className="flex gap-9 items-center max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              hasDropdown={item.hasDropdown}
            />
          ))}
          <div className="flex gap-5 self-stretch">
            <Button variant="text" label="Sign In" />
            <Button variant="primary" label="Sign Up" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
