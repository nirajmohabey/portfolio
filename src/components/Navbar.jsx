import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -50; // Adjusted offset for navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Menu */}
        <div
          className="mx-auto hidden max-w-lg items-center justify-between
            rounded-full border border-white/30 py-2 px-6 backdrop-blur-lg lg:flex"
        >
          {/* Navbar Title */}
          <a href="/" className="text-base font-bold uppercase">
            Niraj Mohabey
          </a>
          {/* Navbar Links */}
          <ul className="flex items-center gap-6">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-stone-300 text-sm"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="py-2 px-3 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            {/* Navbar Title */}
            <a href="#">
              <span className="uppercase text-base font-bold">
                Niraj Mohabey
              </span>
            </a>
            {/* Mobile Menu Toggle */}
            <button
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenu3Line className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Mobile Menu Links */}
          {isMobileMenuOpen && (
            <ul className="my-3 flex flex-col gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-sm"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
