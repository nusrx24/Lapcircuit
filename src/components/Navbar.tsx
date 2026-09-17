import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex row justify-between items-center bg-transparent select-none"
      >
        {/* Logo (left) */}
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-3 text-black no-underline"
          aria-label="Mainframe Home"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight font-medium"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] leading-none select-none text-black"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex items-center text-[23px] text-black font-normal"
          aria-label="Primary navigation"
        >
          <a href="#labs" className="hover:opacity-60 transition-opacity">
            Labs
          </a>
          <span className="select-none">, </span>
          <a href="#studio" className="hover:opacity-60 transition-opacity">
            Studio
          </a>
          <span className="select-none">, </span>
          <a href="#openings" className="hover:opacity-60 transition-opacity">
            Openings
          </a>
          <span className="select-none">, </span>
          <a href="#shop" className="hover:opacity-60 transition-opacity">
            Shop
          </a>
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <a
            id="desktop-cta"
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 focus:outline-none cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 9) */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <a
          id="mobile-link-labs"
          href="#labs"
          onClick={closeMenu}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Labs
        </a>
        <a
          id="mobile-link-studio"
          href="#studio"
          onClick={closeMenu}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Studio
        </a>
        <a
          id="mobile-link-openings"
          href="#openings"
          onClick={closeMenu}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Openings
        </a>
        <a
          id="mobile-link-shop"
          href="#shop"
          onClick={closeMenu}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Shop
        </a>
        <a
          id="mobile-link-contact"
          href="#contact"
          onClick={closeMenu}
          className="text-[32px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
