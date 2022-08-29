import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import "../css/style.css"
const groupPicture = new URL("../../media/Group85.png", import.meta.url);

export function Layout(props) {
  // const setSucces = () => {
  //   setIsSucces(true)
  // }
  // const [isSucces, setIsSucces] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-zinc-900 z-0">
        {props.children}

        <section className="max-w-6xl mx-4 lg:mx-auto border border-amber-100 my-20 relative">
          <img
            src={groupPicture}
            alt="grouppicture"
            className="absolute top-10 left-10 w-20 z-[1] "
          />
          <img
            src={groupPicture}
            alt="grouppicture"
            className="absolute top-10 right-10 w-20 z-[1] "
          />

          <div>
            <p className="text-lg text-amber-100 text-center font-semibold mt-10">
              Newsletter
            </p>
            <h1 className="text-5xl text-amber-200 text-center font-bold mt-12 mx-4">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-lg text-amber-100 text-center font-semibold mt-10">
              And never miss latest Updates
            </p>
          </div>
          <form className="flex items-center space-x-6 max-w-[600px] mx-4 md:mx-auto">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="px-4 py-3 bg-transparent border border-amber-100 w-full"
            />
            <button
              className=" px-5 py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900 my-10 duration-200"
            >
              Subscribe
            </button>
          </form>
        </section>
        {/* <div className=" fixed inset-0 flex justify-center items-center -z-10">
          <p className={isSucces ? "p-20 bg-white text-black text-xl border border-white" : "hidden"}>Succes</p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
