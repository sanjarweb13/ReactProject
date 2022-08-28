const AboutBg = new URL("../../../media/MaskGroup2.jpg", import.meta.url);
function WelcomeSlice() {
  return (
    <section className="relative">
      <img
        src={AboutBg}
        alt="photo"
        className="top-0 right-0 absolute w-full object-cover z-[-1]"
      />
      <div className="z-[1]">
        <div className="max-w-[700px] mx-4 lg:mx-auto">
          <div className="text-7xl text-amber-300 font-bold md:flex justify-center py-36">
            Welcome to
            <div className="flex items-center md:ml-8">
              <img
                className="w-20"
                src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
                alt="logo"
              />
              <h1 className=" tracking-widest">ericht</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSlice;
