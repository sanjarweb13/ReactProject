import "../../../shared_components/css/style.css"
const forkImg = new URL("../../../media/fork.webp", import.meta.url);

const AboutBg = new URL("../../../media/MaskGroup2.webp", import.meta.url);
function WelcomeSlice() {
  return (
    <section className="relative backgroundOpacity h-[85vh]">
      <div className="z-20">
        <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
          <div className="text-5xl sm:text-6xl md:text-7xl text-amber-300 font-bold flex justify-center pt-36">
            Welcome to
            <div className="flex items-center md:ml-8">
              <img
                className="w-14 md:w-20"
                src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
                alt="logo"
                width={"100%"}
                height={"100%"}
              />
              <h1 className="tracking-wider">ericht</h1>
            </div>
          </div>
          <div className="text-amber-100 font-semibold text-2xl my-16 flex items-center justify-center">
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
                <p className="text-center">We Are Very Happy With Everyone Who Contacts Us</p>
                <img src={forkImg} alt="fork" className="w-12 mx-4" />
              </div>
        </div>
      </div>
      <img
        src={AboutBg}
        alt="photo"
        className="backgroundOpacityImage"
      />
    </section>
  );
}

export default WelcomeSlice;
