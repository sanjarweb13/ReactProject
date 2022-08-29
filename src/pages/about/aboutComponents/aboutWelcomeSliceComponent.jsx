import "../about.css"
const AboutBg = new URL("../../../media/MaskGroup2.jpg", import.meta.url);
function WelcomeSlice() {
  return (
    <section className="relative about h-[85vh]">
      <div className="z-20">
        <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
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
      <img
        src={AboutBg}
        alt="photo"
        className="aboutBgImage"
      />
    </section>
  );
}

export default WelcomeSlice;
