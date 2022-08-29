const groupPicture = new URL("../../../media/Group85.png", import.meta.url);
const forkImg = new URL("../../../media/fork.png", import.meta.url);

function BookingComp() {
  return (
    <section className="max-w-6xl mx-4 md:mx-auto bg-zinc-900 border border-amber-200 shadow-lg relative">
      <img
        src={groupPicture}
        alt="grouppicture"
        className="absolute top-10 left-10 w-20 z-[1] "
      />
      <img
        src={groupPicture}
        alt="grouppicture"
        className="absolute top-10 right-10 w-20 z-[1] "
      />

      <p className="text-amber-100 font-semibold text-lg my-10 flex items-center justify-center">
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
        Reservation
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
      </p>
      <h1 className="text-amber-200 font-bold text-5xl text-center my-10">
        Book A Table
      </h1>

      <form className="max-w-[1000px] mx-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <input
          type="text"
          required
          className="px-4 py-3 text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="1 Person"
        />
        <input
          type="date"
          required
          className="px-4 py-3 text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="day / month / year"
        />
        <input
          type="text"
          required
          className="px-4 py-3 text-lg font-semibold border border-amber-100 bg-transparent text-amber-100"
          placeholder="07 : 00 AM"
        />
      </form>
      <div className="flex justify-center">
        <button className=" px-5 py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900 my-10">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default BookingComp;
