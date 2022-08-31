const groupPicture = new URL("../../media/Group85.webp", import.meta.url);


function Subscribe() {
    return ( 
        <section className="max-w-6xl mx-4 lg:mx-auto border border-amber-100 my-16 relative">
          <img
            src={groupPicture}
            alt="grouppicture"
            width={"100%"}
            height={"100%"}
            className="absolute top-10 left-6 w-16 md:w-20 z-[1] "
          />
          <img
            src={groupPicture}
            alt="grouppicture"
            width={"100%"}
            height={"100%"}
            className="absolute top-10 right-6 w-16 md:w-20 z-[1] "
          />

          <div>
            <p className="text-lg text-amber-100 text-center font-semibold mt-14">
              Newsletter
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-amber-200 text-center font-bold mt-16 mx-4">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-lg text-amber-100 text-center font-semibold mt-10">
              And never miss latest Updates
            </p>
          </div>
          <form className="flex items-center space-x-6 max-w-[600px] mx-4 md:mx-auto">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="px-4 py-2 md:py-3 bg-transparent border border-amber-100 w-full text-amber-100"
            />
            <button
              className="flex px-3 md:px-5 py-1 md:py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 active:bg-amber-200 active:text-zinc-900 my-10 duration-200"
            >
              ClickHere
            </button>
          </form>
        </section>
       
     );
}

export default Subscribe;

 {/* <div className=" fixed inset-0 flex justify-center items-center -z-10">
          <p className={isSucces ? "p-20 bg-white text-black text-xl border border-white" : "hidden"}>Succes</p>
        </div> */}