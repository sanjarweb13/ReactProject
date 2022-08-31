import React from "react";
import { Link } from "react-router-dom";

const bgPicture = new URL("../../media/BG.webp", import.meta.url);

export function Footer() {
  return (
    <footer className="relative px-4">
      <img
        src={bgPicture}
        className="w-full h-full z-[-1] absolute top-0 right-0 object-cover"
        alt="background"
      />

      <section className="max-w-screen-xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 items-center py-10 z-[1]">
        <div className="text-zinc-200">
          <h1 className="text-center text-2xl my-6 pt-14">Contact Us</h1>
          <p className="text-center py-1">
            9 w 53rd St, New York, NY 10019, USA
          </p>
          <p className="text-center pt-3">+998996658313</p>
          <p className="text-center">+998910051326</p>
        </div>
        <div className="">
          <Link
            to="/"
            className="flex px-4 items-center justify-center my-6 pt-4"
          >
            <img
              className="w-20"
              src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
              alt="logo"
              width={"100%"}
              height={"100%"}
            />
            <h2 className="font-semibold text-5xl tracking-widest text-amber-300">
              ERICHT
            </h2>
          </Link>
          <p className="text-orange-100 text-center mt-10">
            "The best way to find yourself is to lose yourself in the service of
            others"
          </p>
        </div>
        <div className="text-zinc-200 text-center">
          <h3 className="text-center text-2xl my-6 pt-20">Working Hours</h3>
          <p className="pt-3">Monday-Friday:</p>
          <span>08:00 am - 12:00 am</span>
          <p className="pt-3">Saturday - Sunday:</p>
          <span>07:00 am - 11:00 pm</span>
        </div>
      </section>
    </footer>
  );
}
