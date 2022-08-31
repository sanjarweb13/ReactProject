import { Link } from "react-router-dom";

const maskGroupPicture = new URL("../../../media/MaskGroup.webp", import.meta.url);

function TheKeyToFineDiningPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 items-center px-4 my-16">
      <div className="max-w-[500px]">
        <p className="text-amber-100">Chase The New Flower</p>
        <p className="text-amber-200 text-5xl sm:text-6xl md:text-7xl tracking-wide leading-relaxed font-bold mt-6">
          The Key To Fine Dining
        </p>
        <p className="text-orange-100 pr-20 my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          quaerat saepe excepturi neque accusantium est dolorum, quod ullam
          reprehenderit?
        </p>
        
        <div className="my-2">
        <Link to={"/#menu"}>
          <button className="px-3 md:px-5 py-1 md:py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 active:bg-amber-200 active:text-zinc-900">
            Explore Menu
          </button>
          </Link>
        </div>
      </div>
      <div className="relative z-50">
        <img
          src={maskGroupPicture}
          className="p-5 object-cover z-50"
          alt="BG.webp"
          width={"100%"}
          height={"100%"}
        />
        <div className="w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] absolute -z-10 bg-amber-200 top-1 right-1"></div>
        <div className="w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] absolute -z-10 bg-amber-200 bottom-1 left-1"></div>
      </div>
    </section>
  );
}

export default TheKeyToFineDiningPage;
