const forkPicture = new URL("../../../media/fork.webp", import.meta.url);
const glassPicture = new URL("../../../media/glass2.webp", import.meta.url);
const boottlePicture = new URL(
  "../../../media/boottleDrinks.webp",
  import.meta.url
);
const andSignPicture = new URL("../../../media/andsign.webp", import.meta.url);

function SpecialDrinkComponent() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-32">
      <div className="max-w-[350px] mx-auto my-10">
        <p className="text-orange-100 font-semibold text-center text-lg">
          Menu That Fits You Palatte
        </p>
        <div className="grid grid-cols-3 gap-10 my-8 justify-center ">
          <img src={glassPicture} alt="fork" className="w-16 pl-6" width={"64px"} height={"64px"}/>
          <img src={glassPicture} alt="fork" className="w-16 pl-6" width={"64px"} height={"64px"}/>
          <img src={glassPicture} alt="fork" className="w-16 pl-6" width={"64px"} height={"64px"}/>
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-200 my-10 text-center">
          Weekly Special
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mt-10 max-w-[358px] mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-100 text-center">
            Wine
            <img
              src={andSignPicture}
              alt="andsign"
              className="w-4 inline-block text-center mx-8"
              width={"100%"}
              height={"100%"}
            />
            Beer
          </p>
          <div className="my-10">
            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Chapel Hill Shiraz <span className="mx-6">____________</span> $56
            </p>
            <span className="text-zinc-100 pt-3">AU | Bottle</span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Catena Malbec <span className="mx-6 pl-6">____________</span> $59
            </p>
            <span className=" text-zinc-100 pt-3">AR | Bottle</span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              La Vieille Rose <span className="mx-6 pl-7">____________</span>{" "}
              $44
            </p>
            <span className="text-zinc-100 pt-3">FR | 750 ml</span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Rhino Pale Ale <span className="mx-6 pl-7">____________</span> $31
            </p>
            <span className="text-zinc-100 pt-3">CA | 750 ml</span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Irish Guinness <span className="mx-6 pl-7">____________</span> $26
            </p>
            <span className="text-zinc-100 pt-3">IE | 750 ml</span>
          </div>
        </div>
        <div className="max-w-[412] mx-auto">
          <img src={boottlePicture} alt="boottle" className="object-cover" />
        </div>
        <div className="mt-10 max-w-[358px] mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-100 text-center">
            Cocktails
          </p>
          <div className="my-10 ">
            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Aperol Spritz
              <span className="mx-6 pl-[52px]">____________</span> $20
            </p>
            <span className=" text-zinc-100 pt-3">
              Aperol | Bottle | Villa Marchesi prosecco | soda | 30ml
            </span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Dark 'N' Stormy
              <span className="mx-6 pl-[29px]">____________</span> $16
            </p>
            <span className=" text-zinc-100 pt-3">
              Dark rum | Ginger beer | Slice of lime{" "}
            </span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Daiquiri <span className="mx-6 pl-[85px]">____________</span> $10
            </p>
            <span className=" text-zinc-100 pt-3">
              Rum | Citrus juice | Sugar
            </span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Old Fashioned
              <span className="mx-6 pl-[44px]">____________</span> $31
            </p>
            <span className=" text-zinc-100 pt-3">
              Bourbon | Brown sugar | Angostura Bitters
            </span>

            <p className="text-amber-200 font-semibold mt-8 text-xl">
              Negroni <span className="mx-6 pl-[86px]">____________</span> $26
            </p>
            <span className=" text-zinc-100 pt-3">
              Gin | Sweet Vermouth | Campari | Orange garnish
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDrinkComponent;
