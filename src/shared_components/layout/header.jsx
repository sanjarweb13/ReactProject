import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utilis/authContext";
const bgPicture = new URL("../../media/BG.jpg", import.meta.url);

export function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };

  return (
    <div className="text-zinc-200 shadow-lg relative">
      <img
        src={bgPicture}
        className="w-full h-full z-[-1] absolute top-0 right-0 object-cover"
        alt="background"
      />

      <div className="max-w-screen-xl lg:mx-auto  py-4 px-5 flex md:flex-col lg:flex-row items-center justify-between  md:justify-start lg:justify-between space-y-0 md:space-y-4 lg:space-y-0 z-[1] ">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              className="w-16 md:w-20"
              src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
              alt="logo"
            />
            <h1 className="font-bold text-4xl md:text-5xl tracking-widest text-amber-300">
              ERICHT
            </h1>
          </Link>
          <div className="flex justify-end">
            <div className="hidden md:block lg:hidden">
              {currentUser != null ? (
                <div onClick={onLogout} className="md:mr-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-zinc-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-center text-zinc-100"></p>
                </div>
              ) : (
                <div className="md:mr-10">
                  <Link to="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-zinc-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <Menu />
        <div className="flex space-x-4">
          <div className="block md:hidden lg:block">
            {currentUser != null ? (
              <div onClick={onLogout} className="md:mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-zinc-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-center text-zinc-100"></p>
              </div>
            ) : (
              <div className="md:mr-10">
                <Link to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-zinc-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <nav className="font-semibold hidden md:block">
      <Link to="/about" className="px-4 ">
        About Us
      </Link>
      <Link to="/blog" className="px-4 ">
        Blogs
      </Link>
      <Link to="/team" className="px-4 ">
        Our Team
      </Link>
      <Link to="/service" className="px-4 ">
        Services
      </Link>
      <Link to="/contact" className="px-4 ">
        Contact Us
      </Link>
      <Link to="/faq" className="px-4 ">
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
