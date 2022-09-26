import { useState } from "react";
import "../../shared_components/css/style.css";
import { Layout } from "../../shared_components/layout";
import FAQAccordion from "./FaqAccordion";
const BgImg = new URL("../../../public/media/MaskGroup2.webp", import.meta.url);
const forkImg = new URL("../../../public/media/fork.webp", import.meta.url);
const drinkImg = new URL("../../../public/media/drink.webp", import.meta.url);

export function FAQPage() {
  return (
    <Layout>
      <section className="relative backgroundOpacity h-[85vh]">
        <div className="z-20">
          <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
            <div className="text-4xl text-center md:text-6xl lg:text-7xl text-amber-300 font-bold md:flex justify-center pt-36">
              <h1 className="py-16">Frequently Asked Questions</h1>
            </div>
            <div className="text-7xl text-amber-300 font-bold flex justify-center">
              <div className="text-amber-100 font-semibold text-2xl my-10 flex items-center justify-center">
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
                <p className="text-center">We Are Very Happy With Everyone Who Contacts Us</p>
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
              </div>
            </div>
          </div>
        </div>
        <img src={BgImg} alt="photo" className="backgroundOpacityImage" />
      </section>
      <section className="max-w-6xl mx-4 xl:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative z-50 max-w-[550px] mx-auto py-20">
          <img
            src={drinkImg}
            className="p-5 object-cover z-50 w-[550px]"
            alt="BG.webp"
          />
          <div className="w-[240px] h-[240px] absolute -z-10 bg-amber-200 top-20 right-1"></div>
          <div className="w-[240px] h-[240px] absolute -z-10 bg-amber-200 bottom-20 left-1"></div>
        </div>
        <div>
          <FAQAccordion />
        </div>
      </section>
    </Layout>
  );
}
