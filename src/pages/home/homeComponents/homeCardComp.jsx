import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeUpdateCard from "../homeUpdateCard";
const forkImg = new URL("../../../media/fork.png", import.meta.url);

function HomeCardComponent() {   //This component is for HomePage's card section
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/updateGalleryCard")
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-4 md:mx-auto my-10">
        <div className="grid text-center my-8">
            <p className="text-amber-100 font-semibold text-lg my-10 flex items-center justify-center">
              <img
                src={forkImg}
                alt="fork"
                className="w-12 mx-4"
              />
              Blogs
              <img
                src={forkImg}
                alt="fork"
                className="w-12 mx-4"
              />
            </p>
          <div className="flex justify-center">

            <Link to="/" className="flex items-center">
              <img
                className="w-12"
                src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
                alt="logo"
              />
              <h1 className="font-bold text-4xl tracking-widest text-amber-200">
                ericht Updates
              </h1>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-4 lg:grid-cols-3 gap-10 my-16">
          {data.map((restourant) => (
            <HomeUpdateCard
              title={restourant.title}
              imageURL={restourant.imageURL}
              description={restourant.description}
              date={restourant.date}
              createdBy={restourant.createdBy}
              id={restourant.id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/viewMore">
          <button className="px-5 py-2 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeCardComponent;
