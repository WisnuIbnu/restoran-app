import { useEffect, useState } from 'react';
import { GrLogin } from "react-icons/gr";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full fixed px-4 top-0 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4  flex items-center justify-between z-50 transition-all ${
        isScroll ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src="/assets/images/logos/logo.png"
          className="cursor-pointer mr-6 w-20 sm:w-24"
          alt="logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 p-6 ${
          isScroll ? '' : 'bg-white shadow-md rounded-full'
        }`}
      >
        <li><a className="text-sm  lg:text-base" href="/">Beranda</a></li>
        <li><a className="text-sm lg:text-base" href="/menu">Menu</a></li>
        <li><a className="text-sm lg:text-base" href="/tracking-order">Keranjang</a></li>
      </ul>

      {/* Contact Button */}
      <a
        href="/login"
        className="hidden lg:flex items-center gap-2 py-4 px-6 border border-gray-400 rounded-full ml-4 text-sm"
      >
        <GrLogin className="w-5 h-5" />
        Login
      </a>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <img
          src="/assets/images/icons/menu-black.png"
          alt="open menu"
          className="w-8 cursor-pointer"
        />
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col gap-6 py-20 px-8 pb-10 md:hidden shadow-lg`}
      >
        {/* Close Button */}
        <div className="absolute right-4 top-5" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/assets/images/icons/close-black.png"
            alt="close menu"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-4 text-base font-medium">
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/">Home</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/menu">Menu</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/tracking-order">Keranjang</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
