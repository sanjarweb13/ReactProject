import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../../../../shared_components/layout";
import axios from "axios";
import FoodCard from "./foodCard";
import DesertCard from "./desertCard";
const forkImg = new URL("../../../../../public/media/fork.webp", import.meta.url);


function DesertMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/desertMenu")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="text-5xl font-bold text-amber-200 flex justify-center tracking-wider">
          Desert Menu
        </h1>
        <p className="text-amber-100 font-semibold text-lg my-10 flex items-center justify-center">
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
        These are anxious types of Deserts
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
      </p>
      </div>
      <div className="max-w-screen-xl mx-4 lg:mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-20 my-16">
        {data && data.length
          ? data.map((desert) => (
              <DesertCard
                name={desert.name}
                imageURL={desert.imageURL}
                description={desert.description}
                price={desert.price}
                born={desert.born}
                id={desert.id}
              />
            ))
          : null}
      </div>
    </Layout>
  );
}

export default DesertMenu;
