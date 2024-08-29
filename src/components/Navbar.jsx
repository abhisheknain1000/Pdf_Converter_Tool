import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleClick = () => {
    toggleNavbar();
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src="pdf.png" alt="PDFTool Logo" />
            <a href="/" aria-label="Home">
              <span className="text-xl tracking-widest bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-bold">
                PDFTOOL
              </span>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline underline-offset-8 hover:text-red-600">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md flex justify-even hover:shadow-md transition-all tracking-wider">
              Sign In
            </a>
            <a
              href="#pricing"
              className="border-2 py-2 px-3 rounded-md bg-primaryColor transition-all hover:bg-secondaryColor text-textColor tracking-wider"
            >
              Try For Free
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end MobileNavbar transition-all">
            <button onClick={toggleNavbar} aria-label="Toggle Menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="MobileNavbar fixed mt-4 left-0 z-20 bg-white shadow-2xl w-full  p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 -ml-2 hover:underline underline-offset-8 text-black">
                  <div className="flex justify-start">
                  <div className="flex flex-shrink-0 h-6 w-8 p-2 text-primaryColor justify-center items-center rounded-full">{item.icon}</div>
                  <a href={item.href} onClick={handleClick}>{item.label}</a>
                </div>
                  
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6 gap-12">
              <a href="#" className="py-2 px-4 border rounded-md bg-white tracking-wider" onClick={handleClick}>
                Sign In
              </a>
              <a
                href="#pricing"
                className="border-2 py-2 px-4 rounded-md bg-primaryColor transition-all hover:bg-secondaryColor text-textColor tracking-wider"
                onClick={handleClick}
              >
                Try For Free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
