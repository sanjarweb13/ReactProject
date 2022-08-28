import ReactPlayer from "react-player";
const forkPicture = new URL("../../../media/fork.png", import.meta.url);

function AboutVideSlice() {
  return (
    <section className="my-24">
      <div>
        <p className="text-amber-100 font-semibold text-lg text-center my-10">
          <img
            src={forkPicture}
            alt="fork"
            className="w-12 mx-4 inline-block"
          />
          About Us
          <img
            src={forkPicture}
            alt="fork"
            className="w-12 mx-4 inline-block"
          />
        </p>
        <h2 className="text-amber-300 font-bold text-center text-5xl bg-clip-text">
          Happy Hours With Us
        </h2>
        <p className="max-w-2xl mx-4 lg:mx-auto text-orange-100 my-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo totam
          nam placeat delectus qui consequatur doloremque voluptates reiciendis
          nostrum ad, autem libero fugit voluptatem eaque veniam quis quibusdam
          eos assumenda.
        </p>
      </div>
      <div className="flex justify-center py-10">
        <ReactPlayer
          muted
          width={"1152px"}
          height={"600px"}
          controls={true}
          url="https://youtu.be/I-kzdQ3X6U0"
        />
      </div>
    </section>
  );
}

export default AboutVideSlice;
