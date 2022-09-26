import "../../shared_components/css/style.css";
import { Layout } from "../../shared_components/layout";
import { text } from "@fortawesome/fontawesome-svg-core";
const BgImg = new URL("../../../public/media/MaskGroup2.webp", import.meta.url);
const forkImg = new URL("../../../public/media/fork.webp", import.meta.url);
const mapImg = new URL("../../../public/media/map.webp", import.meta.url);
const bgImg = new URL("../../../public/media/BG.webp", import.meta.url);

export function ContactPage() {
  return (
    <Layout>
      <section className="relative backgroundOpacity h-[85vh]">
        <div className="z-20">
          <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
            <div className="text-7xl text-amber-300 font-bold flex justify-center pt-36">
              <h1>Contact Us</h1>
            </div>
            <div className="text-7xl text-amber-300 font-bold flex justify-center">
              <div className="text-amber-100 font-semibold text-2xl my-10 flex items-center justify-center">
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
                <p className="text-center">
                  We Are Very Happy With Everyone Who Contacts Us
                </p>
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
              </div>
            </div>
          </div>
        </div>
        <img src={BgImg} alt="photo" className="backgroundOpacityImage" />
      </section>

      <section className="max-w-screen-xl mx-4 lg:mx-auto my-20">
        <img src={mapImg} alt="map" className="object-cover w-full" />
      </section>

      <section className="relative">
        <img
          src={bgImg}
          alt="bg"
          className="top-0 left-0 absolute w-full h-full z-[-1]"
        />
        <div className="max-w-screen-xl mx-4 xl:mx-auto z-[1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10">
            <div className="py-24">
              <form className="flex flex-col space-y-8 px-4">
                <input
                  type={text}
                  required
                  className="w-full bg-transparent text-orange-100 font-bold text-lg border border-amber-100 px-4 py-3"
                  placeholder="Full Name"
                />
                <input
                  type={"email"}
                  required
                  className="w-full bg-transparent text-orange-100 font-bold text-lg border border-amber-100 px-4 py-3"
                  placeholder="Email Address"
                />
                <textarea
                  className=" bg-transparent text-orange-100 font-bold md:text-lg border border-amber-100 px-4 py-3"
                  placeholder="Massage"
                  rows={5}
                />
              </form>
              <button className="mx-4 px-5 py-2 bg-amber-200 text-zinc-900 text-lg  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900 my-10 duration-200">
                Send Massage
              </button>
            </div>
            <div className="md:py-8">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/517/845/145/pizza-italian-food-vegetarian-food-pizza-margherita-wallpaper-preview.jpg"
                alt="pizza"
                className="aspect-4/3 object-cover h-full px-4 hover:scale-105 duration-300 overflow-hidden cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
