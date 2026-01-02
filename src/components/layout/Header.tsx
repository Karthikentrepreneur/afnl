import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white py-2 shadow-md backdrop-blur-sm"
          : "bg-white/95 py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <div className="flex justify-between items-center">
          {/* Logos */}
          <div className="flex items-center gap-4">
            {/* Main Logo */}
            <img
              src="/futurenet-logo.png"
              alt="Arabian Future Net Logo"
              onClick={handleLogoClick}
              className={`cursor-pointer transition-all duration-300 object-contain ${
                scrolled ? "h-10" : "h-14"
              }`}
            />

            {/* Separator (Desktop only) */}
            <div className="hidden md:block h-8 w-px bg-gray-200" />

            {/* 1Global Logo (Desktop only) */}
            <img
              src="/1GlobalEnterprises.png"
              alt="1 Global Enterprises Logo"
              className={`hidden md:block transition-all duration-300 object-contain ${
                scrolled ? "h-7" : "h-9"
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
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
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
                className={`font-medium transition-colors py-1 ${
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
          className={`${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          role="region"
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
