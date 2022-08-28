import { useState } from "react";
import { Link } from "react-router-dom";
const bgPicture = new URL("../../media/BG.jpg", import.meta.url);

export function Header() {
  return (
    <div className="text-zinc-200 shadow-lg relative">
       <img
        src={bgPicture}
        className="w-full h-full z-[-1] absolute top-0 right-0 object-cover"
        alt="background"
      />

      <div className="max-w-screen-xl mx-auto  py-4 px-5 flex md:flex-col lg:flex-row items-center justify-between space-y-0 md:space-y-4 lg:space-y-0 z-[1] ">
        <Link to="/" className="flex items-center">
          <img
            className="w-20"
            src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
            alt="logo"
          />
          <h1 className="font-bold text-5xl tracking-widest text-amber-300">
            ERICHT
          </h1>
        </Link>
        <Menu />
        <div className="px-2">
          <Link to="/login">Login / Registrate</Link>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <nav className="font-semibold hidden md:block">
      <Link to="/about" className="px-4">
        About Us
      </Link>
      <Link to="/blog" className="px-4">
        Blogs
      </Link>
      <Link to="/team" className="px-4">
        Our Team
      </Link>
      <Link to="/service" className="px-4">
        Services
      </Link>
      <Link to="/contact" className="px-4">
        Contact Us
      </Link>
      <Link to="/faq" className="px-4">
        FAQ
      </Link>
    </nav>
  );
}

export function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  if (showMenu) {
    menu = (
      <div className="font-semibold fixed min-h-screen w-[300px] bg-black text-slate-200 top-20 right-0 z-50">
      <nav className="flex flex-col space-y-4">
        <Link to="/about" className="px-4 pt-4">
          About Us
        </Link>
        <Link to="/blog" className="px-4">
          Blogs
        </Link>
        <Link to="/team" className="px-4">
          Our Team
        </Link>
        <Link to="/service" className="px-4">
          Services
        </Link>
        <Link to="/contact" className="px-4">
          Contact Us
        </Link>
        <Link to="/faq" className="px-4">
          FAQ
        </Link>
      </nav>
      </div>
    );
  }

  return (
    <div className=" block md:hidden">
      <svg
        onClick={() => setShowMenu(!showMenu)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:text-orange-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      {menu}
    </div>
  );
}
