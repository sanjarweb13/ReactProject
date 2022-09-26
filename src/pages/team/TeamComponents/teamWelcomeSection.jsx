import "../../../shared_components/css/style.css";
const forkImg = new URL("../../../../public/media/fork.webp", import.meta.url);

function TeamWelcome() {
  return (
    <section className="relative backgroundOpacity h-[85vh]">
      <div className="z-20">
        <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
          <div className="text-5xl sm:text-6xl md:text-7xl text-amber-300 font-bold flex justify-center pt-36">
            <h1 className="tracking-wider">Our Harmonious Chefs</h1>
          </div>
          <div className="text-amber-100 font-semibold text-2xl my-16 flex items-center justify-center">
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
            <p className="text-center">
              We Are Very Happy With Everyone Who Contacts Us
            </p>
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
          </div>
        </div>
      </div>
      <img
        src="https://wallpaper.dog/large/10957841.jpg"
        alt="photo"
        className="backgroundOpacityImage"
      />
    </section>
  );
}

export default TeamWelcome;
