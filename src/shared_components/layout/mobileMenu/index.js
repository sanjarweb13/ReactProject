import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../utilis/authContext";

const bgPicture = new URL("../../../media/BG.webp", import.meta.url);

export function MobileMenu(props) {
  const { currentUser, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };
  const closeMobileMenu = () => {
    props.setIsMobileMenu(false);
  };

  return (
    <div className="font-bold fixed min-h-screen w-full inset-0 text-slate-200 z-50 ">
      <div className="relative">
        <img
          src={bgPicture}
          alt="bg"
          className="absolute w-full h-full left-0 top-0 z-[-1] object-cover"
        />
        <div className="z-[1] min-h-screen">
          <div className="flex justify-between items-center mx-6 mt-4">
            <div className="flex cursor-pointer p-4">
              {currentUser != null ? (
                <div onClick={onLogout} className="md:mr-10 ">
                  <div className="flex justify-center items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-zinc-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-amber-100">Log Out</span>
                  </div>
                </div>
              ) : (
                <div className="sm:mr-6">
                  <Link to="/login" className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-zinc-100 flex justify-center"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-amber-100 font-bold">Log In</span>
                  </Link>
                </div>
              )}
            </div>
            <button>
              <svg
                onClick={closeMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 text-amber-200 hover:text-amber-300 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr className="my-4 border-amber-200" />
          <div className="flex justify-center">
            <Link to="/" className="flex items-center pt-4">
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
<div className="mx-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/about" className="px-4 text-xl hover:text-amber-200 hover:translate-x-3 duration-300 pt-4">
              About Us
            </Link>
            <Link to="/blog" className="px-4 text-xl hover:text-amber-200 hover:translate-x-3 duration-300">
              Blogs
            </Link>
            <Link to="/team" className="px-4 text-xl hover:text-amber-200 hover:translate-x-3 duration-300">
              Our Team
            </Link>
            <Link to="/contact" className="px-4 text-xl hover:text-amber-200 hover:translate-x-3 duration-300">
              Contact Us
            </Link>
            <Link to="/faq" className="px-4 text-xl hover:text-amber-200 hover:translate-x-3 duration-300">
              FAQ
            </Link>
          </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
