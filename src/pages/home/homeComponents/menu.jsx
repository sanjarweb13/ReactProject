import { Link } from "react-router-dom";

const menuPicture = new URL("../../../media/menubg.webp", import.meta.url);

function RestoranMenu() {
  return (
    <section
      id="menu"
      className="max-w-6xl mx-4 md:mx-auto relative py-32 my-20 backgroundOpacity"
    >
      <img
        src={menuPicture}
        alt="menuimg"
        width={"100%"}
        height={"100%"}
        className="top-0 left-0 w-full h-full absolute bject-cover z-[-1] backgroundOpacityImage "
      />
      <div className="z-[1]">
        <div className="flex justify-start mx-6">
          <div>
          <Link to="/barMenu">
            <p className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">
              Bar Menu
            </p>
          </Link>
          <Link to="/foodMenu">
            <p className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">
              Food Menu
            </p>
          </Link>
          <Link to="/desertMenu">
            <p className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">
              Desert Menu
            </p>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default RestoranMenu;
