const groupPicture = new URL("../../../media/Group85.webp", import.meta.url);
const forkImg = new URL("../../../media/fork.webp", import.meta.url);

function BookingComp() {
  return (
    <section className="max-w-6xl mx-4 md:mx-auto bg-zinc-900 border border-amber-200 shadow-lg relative">
      <img
        src={groupPicture}
        alt="grouppicture"
        width={"100%"}
        height={"100%"}
        className="absolute hidden sm:block top-10 left-10 w-20 z-[1] "
      />
      <img
        src={groupPicture}
        alt="grouppicture"
        width={"100%"}
        height={"100%"}
        className="absolute hidden sm:block top-10 right-10 w-20 z-[1] "
      />

      <p className="text-amber-100 font-semibold text-lg my-10 flex items-center justify-center">
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
        Reservation
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
      </p>
      <h1 className="text-amber-200 font-bold text-3xl sm:text-4xl md:text-5xl text-center my-10">
        Book A Table
      </h1>

      <form className="max-w-[1000px] mx-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <input
          type="text"
          required
          className="px-4 py-2 md:py-3 text-md md:text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="1 Person"
        />
        <input
          type="date"
          required
          className="px-4 py-2 md:py-3 text-md md:text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="day / month / year"
        />
        <input
          type="text"
          required
          className="px-4 py-2 md:py-3 text-md md:text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="07 : 00 AM"
        />
      </form>
      <div className="flex justify-center">
        <button className=" md:px-5 md:py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 px-3 py-1 active:bg-amber-200 active:text-zinc-900 my-10">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default BookingComp;
