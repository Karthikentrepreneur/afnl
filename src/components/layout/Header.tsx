import { Link, useLocation, useNavigate } from "react-router-dom";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-2 shadow-md' : 'bg-white/95 py-2'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/futurenet-logo.png" 
              alt="Arabian Future Net Logo" 
              onClick={handleLogoClick} 
              className="h-14 w-auto cursor-pointer transition-all duration-300 object-contain" 
            />
          </div>

          <button 
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green rounded-md p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <button 
              onClick={() => handleNavClick("/")} 
              className={`text-gray-800 hover:text-brand-green font-medium transition-colors py-1 ${location.pathname === '/' ? 'text-brand-green' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("/about")} 
              className={`text-gray-800 hover:text-brand-green font-medium transition-colors py-1 ${location.pathname === '/about' ? 'text-brand-green' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick("/services")} 
              className={`text-gray-800 hover:text-brand-green font-medium transition-colors py-1 ${location.pathname.includes('/services') ? 'text-brand-green' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick("/careers")} 
              className={`text-gray-800 hover:text-brand-green font-medium transition-colors py-1 ${location.pathname === '/careers' ? 'text-brand-green' : ''}`}
            >
              Careers
            </button>
            <button 
              onClick={() => handleNavClick("/contact")} 
              className={`text-gray-800 hover:text-brand-green font-medium transition-colors py-1 ${location.pathname === '/contact' ? 'text-brand-green' : ''}`}
            >
              Contact Us
            </button>
            
            <button 
              onClick={() => handleNavClick("/contact")} 
              className="px-5 py-2 bg-brand-green text-white rounded-full hover:bg-emerald-600 transition font-medium"
            >
              Get A Quote
            </button>
          </nav>
        </div>

        <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="flex flex-col gap-4 border-t mt-4 border-gray-100">
            <button 
              onClick={() => handleNavClick("/")} 
              className={`text-gray-800 hover:text-brand-green font-medium ${location.pathname === '/' ? 'text-brand-green' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("/about")} 
              className={`text-gray-800 hover:text-brand-green font-medium ${location.pathname === '/about' ? 'text-brand-green' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick("/services")} 
              className={`text-gray-800 hover:text-brand-green font-medium ${location.pathname.includes('/services') ? 'text-brand-green' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick("/careers")} 
              className={`text-gray-800 hover:text-brand-green font-medium ${location.pathname === '/careers' ? 'text-brand-green' : ''}`}
            >
              Careers
            </button>
            <button 
              onClick={() => handleNavClick("/contact")} 
              className={`text-gray-800 hover:text-brand-green font-medium ${location.pathname === '/contact' ? 'text-brand-green' : ''}`}
            >
              Contact Us
            </button>
            
            <button 
              onClick={() => handleNavClick("/contact")} 
              className="px-4 py-2 bg-brand-green text-white rounded-md hover:bg-emerald-600 text-center font-medium w-full"
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
