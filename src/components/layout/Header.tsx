import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[999]
        bg-white border-b border-gray-100
        transition-shadow duration-300
        ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : ""}
      `}
    >
      <div className="container mx-auto px-4">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <div className="flex justify-between items-center py-3">
          {/* Logos */}
          <div className="flex items-center gap-4">
            {/* Main Logo – ZOOM IN ONLY */}
            <img
              src="/futurenet-logo.png"
              alt="Arabian Future Net Logo"
              onClick={handleLogoClick}
              className={`cursor-pointer object-contain h-12 transition-transform duration-300 ease-out ${
                scrolled ? "scale-[1.05]" : "scale-100"
              }`}
            />

            {/* Divider */}
            <div className="hidden md:block h-8 w-px bg-gray-200" />

            {/* 1Global Logo – ZOOM IN ONLY */}
            <img
              src="/1GlobalEnterprises.png"
              alt="1 Global Enterprises Logo"
              className={`hidden md:block object-contain h-8 transition-transform duration-300 ease-out ${
                scrolled ? "scale-[1.05]" : "scale-100"
              }`}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green rounded-md p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services", match: "/services" },
              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact" },
            ].map(({ label, path, match }) => (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className={`font-medium transition-colors ${
                  location.pathname === path ||
                  (match && location.pathname.includes(match))
                    ? "text-brand-green"
                    : "text-gray-800 hover:text-brand-green"
                }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("/contact")}
              className="px-5 py-2 bg-brand-green text-white rounded-full hover:bg-emerald-600 transition font-medium"
            >
              Get A Quote
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="flex flex-col gap-4 border-t mt-4 border-gray-100">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact" },
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className={`font-medium ${
                  location.pathname === path
                    ? "text-brand-green"
                    : "text-gray-800 hover:text-brand-green"
                }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("/contact")}
              className="px-4 py-2 bg-brand-green text-white rounded-md hover:bg-emerald-600 font-medium w-full"
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
