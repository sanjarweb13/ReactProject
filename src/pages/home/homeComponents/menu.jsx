import { Link } from "react-router-dom";

const menuPicture = new URL("../../../media/menubg.jpg", import.meta.url);

function RestoranMenu() {
  return (
    <section className="max-w-6xl mx-4 md:mx-auto relative z-[1] py-32 mt-20">
      <img
        src={menuPicture}
        alt="menu"
        className="top-0 left-0 absolute z-[-1] mb-20"
      />
      <div className="max-w-[350px]">
        <div className="px-20 flex flex-col">
          <Link to="/barMenu" className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">Bar Menu</Link>
          <Link to="/foodMenu" className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">Food Menu</Link>
          <Link to="/desertMenu" className="text-4xl font-bold text-amber-200 my-6 hover:translate-x-3 duration-300 hover:underline">Desert Menu</Link>
        </div>
      </div>
    </section>
  );
}

export default RestoranMenu;
