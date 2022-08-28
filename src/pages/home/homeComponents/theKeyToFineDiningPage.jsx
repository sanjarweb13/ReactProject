const maskGroupPicture = new URL("../../../media/MaskGroup.jpg", import.meta.url);

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
          <button className="px-5 py-2 bg-amber-200 text-zinc-900  font-semibold hover:bg-transparent hover:border hover:border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
            Explore Menu
          </button>
        </div>
      </div>
      <div className="relative z-50">
        <img
          src={maskGroupPicture}
          className="p-5 object-cover z-50"
          alt="BG.jpg"
        />
        <div className="w-[350px] h-[350px] absolute -z-10 bg-amber-200 top-0 right-0"></div>
        <div className="w-[350px] h-[350px] absolute -z-10 bg-amber-200 bottom-0 left-0"></div>
      </div>
    </section>
  );
}

export default TheKeyToFineDiningPage;
