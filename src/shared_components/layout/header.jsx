import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utilis/authContext";
import { MobileMenu } from "./mobileMenu";
import NavbarLinks from "./Navbar/navbarLinks";
const bgPicture = new URL("../../../public/media/BG.webp", import.meta.url);

export function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };

  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenu(true);
  };

  return (
    <div className="text-zinc-200 shadow-lg relative">
      <img
        src={bgPicture}
        className="w-full h-full z-[-1] absolute top-0 right-0 object-cover"
        alt="background"
      />

      <div className="max-w-screen-xl lg:mx-auto  py-4 px-5 flex lg:flex-row items-center justify-between  z-[1] ">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              className="w-16 md:w-20"
              src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
              alt="logo"
              width={"100%"}
              height={"100%"}
            />
            <h1 className="font-bold text-4xl md:text-5xl tracking-widest text-amber-300">
              ERICHT
            </h1>
          </Link>
        </div>
        <div className="flex space-x-4 items-center justify-end">
          <NavbarLinks />
          <div className="flex cursor-pointer">
            {currentUser != null ? (
              <div onClick={onLogout} className="mr-5">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-zinc-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-amber-100 ">Log Out</span>
              </div>
            ) : (
              <div className="mr-5">
                <Link to="/login">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-zinc-100 flex justify-center"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-amber-100">Log In</span>
                </Link>
              </div>
            )}
          </div>

          <div className="block lg:hidden">
            <svg
              onClick={openMobileMenu}
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
            {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
          </div>
        </div>
      </div>
    </div>
  );
}
