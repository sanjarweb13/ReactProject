import { Link } from "react-router-dom";

const knivePicture = new URL("../../../../public/media/knive.webp", import.meta.url);
const bgPicture = new URL("../../../../public/media/BG.webp", import.meta.url);
const GPicture = new URL("../../../../public/media/G.webp", import.meta.url);

function AboutComponent() {
  return (
    <section className="my-20 relative z-[1]">
      <img
        src={bgPicture}
        className="object-cover h-full w-full z-[-1] absolute"
        alt="BG.webp"
        width={"100%"}
        height={"100%"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 items-center px-4 z-50 py-20">
        <div className="grid justify-items-end">
          <h1 className="text-amber-200 text-3xl sm:text-4xl md:text-5xl font-bold">
            About Us
          </h1>
          <p className="text-orange-100 my-6 text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dicta delectus earum, vel natus accusamus, quibusdam assumenda in
            consequatur ea quis sapiente voluptates magni.
          </p>
          <Link to="/about">
            <button className="px-3 md:px-5 py-1 md:py-2 bg-amber-200 text-zinc-900  font-semibold hover:bg-transparent border border-amber-200 hover:text-amber-200 active:bg-amber-200 active:text-zinc-900">
              Know More
            </button>
          </Link>
        </div>
        <div className="my-10">
          <div className="relative">
            <img
              src={GPicture}
              className="z-[-1] top-0 left-0 object-cover min-w-screen absolute"
              alt="Gpicture"
            />
            <div className="z-[1]">
              <div className="relative flex justify-center">
                <img
                  src={knivePicture}
                  className="w-10 md:14 object-cover top-0 left-0 z-[-1]"
                  alt="knive.webp"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <h2 className="text-amber-200 text-3xl sm:text-4xl md:text-5xl font-bold">Our History</h2>
          <p className="text-orange-100 my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dicta delectus earum, vel natus accusamus, quibusdam assumenda in
            consequatur ea quis sapiente voluptates magni.
          </p>
          <Link to="/about#history">
            <button className="px-3 md:px-5 py-1 md:py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 active:bg-amber-200 active:text-zinc-900">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
