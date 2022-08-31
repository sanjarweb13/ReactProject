import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import "../css/style.css"
import Subscribe from "../subscribeComp";

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
      <Subscribe/>
      </div>
      <Footer />
    </div>
  );
}
