const forkPicture = new URL("../../../media/fork.png", import.meta.url);
const historyImg = new URL("../../../media/MaskHistory.jpg", import.meta.url);
const historyImg2 = new URL("../../../media/MaskHistory2.jpg", import.meta.url);
const forkimg = new URL("../../../media/fork.png", import.meta.url);

function HistorySlice() {
  return (
    <section id="history" className="max-w-6xl mx-4 lg:mx-auto my-32">
      <div className="pt-20">
        <p className="text-amber-100 font-semibold text-xl my-10 flex items-center justify-center">
          <img
            src={forkPicture}
            alt="fork"
            className="w-12 mx-4"
          />
          Our History
          <img
            src={forkPicture}
            alt="fork"
            className="w-12 mx-4"
          />
        </p>
        <h2 className="text-5xl font-bold text-center my-8 text-amber-300">
          Serving Customers For Over A Decade
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        <div className="grid">
          <div>
            <p className="max-w-2xl mx-4 lg:mx-auto text-orange-100 my-6 text-justify text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              totam nam placeat delectus qui consequatur doloremque voluptates
              reiciendis nostrum ad, autem libero fugit voluptatem eaque veniam
              quis quibusdam eos assumenda.
            </p>
          </div>
          <div>
            <img
              src={historyImg}
              alt="img"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="grid">
          <div>
            <img
              src={historyImg2}
              alt="img"
              className="w-full h-full object-cover  "
            />
          </div>
          <div className="mt-24">
            <h3 className="text-amber-200 font-bold text-4xl mt-6 tracking-wider">
              Over The Years
            </h3>
            <div className="grid grid-cols-3 gap-10 mt-20">
              <div className="border-r-2 border-amber-200 ">
                <div className="text-amber-200 flex mt-3">
                  <img src={forkimg} alt="fork" className="w-10" />
                  <h4 className="text-5xl">30+</h4>
                </div>
                <h4 className="text-2xl font-bold text-amber-100 pt-5">Breakfast Options</h4>
              </div>
              <div className="border-r-2 border-amber-200 ">
                <div className="text-amber-200 flex mt-3">
                  <img src={forkimg} alt="fork" className="w-10" />
                  <h4 className="text-5xl">50+</h4>
                </div>
                <h4 className="text-2xl font-bold text-amber-100 pt-5">Dinner Options</h4>
              </div>
              <div>
                <div className="text-amber-200 flex mt-3">
                  <img src={forkimg} alt="fork" className="w-10" />
                  <h4 className="text-5xl">8</h4>
                </div>
                <h4 className="text-2xl font-bold text-amber-100 pt-5">New Location</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySlice;
