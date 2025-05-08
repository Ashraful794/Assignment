import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import CustomButton from "./CustomButton";

function Navbar() {
  const navLinks = [
    "Home",
    "Company",
    "Marketplace",
    "Features",
    "Team",
    "Contact",
  ];
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Logo />
        <div className="flex items-center lg:order-2">
          <CustomButton name={"Download"} />
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <NavLinks links={navLinks} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
