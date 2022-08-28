import { Link } from "react-router-dom";

const knivePicture = new URL("../../../media/knive.png", import.meta.url);
const bgPicture = new URL("../../../media/BG.jpg", import.meta.url);
const GPicture = new URL("../../../media/G.png", import.meta.url);

function AboutComponent() {
    return (  
        <section className="my-20 relative z-[1]">
        <img
          src={bgPicture}
          className="object-cover h-full w-full z-[-1] absolute"
          alt="BG.jpg"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 items-center px-4 z-50 py-40">
          <div className="grid justify-items-end">
            <h4 className="text-amber-200 text-5xl font-bold">About Us</h4>
            <p className="text-orange-100 my-6 text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              dicta delectus earum, vel natus accusamus, quibusdam assumenda in
              consequatur ea quis sapiente voluptates magni.
            </p>
            <Link to="/about">
              <button className="px-5 py-2 bg-amber-200 text-zinc-900  font-semibold hover:bg-transparent hover:border hover:border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
                Know More
              </button>
            </Link>
          </div>
          <div className="relative z-[1]">
            <img src={GPicture} className="z-[-1] center pl-10 pr-10" />
            <div className=" absolute left-40 top-[-92px]">
              <img src={knivePicture} className="w-14 " alt="knive.png" />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <h4 className="text-amber-200 text-5xl font-bold">Our History</h4>
            <p className="text-orange-100 my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              dicta delectus earum, vel natus accusamus, quibusdam assumenda in
              consequatur ea quis sapiente voluptates magni.
            </p>
            <Link to="/">
              <button className="px-5 py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent hover:border hover:border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default AboutComponent;