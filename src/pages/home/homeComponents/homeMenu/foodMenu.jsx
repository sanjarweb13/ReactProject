import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../../../../shared_components/layout";
import axios from "axios";
import FoodCard from "./foodCard";
const forkImg = new URL("../../../../../public/media/fork.webp", import.meta.url);


function FoodMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/foodMenu")
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
          Food Menu
        </h1>
        <p className="text-amber-100 font-semibold text-lg my-10 flex items-center justify-center">
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
        These are anxious types of Meals
        <img src={forkImg} alt="fork" className="w-12 mx-4" />
      </p>
      </div>
      <div className="max-w-screen-xl mx-4 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-16">
        {data && data.length
          ? data.map((foods) => (
              <FoodCard
                name={foods.name}
                imageURL={foods.imageURL}
                description={foods.description}
                price={foods.price}
                born={foods.born}
                id={foods.id}
              />
            ))
          : null}
      </div>
    </Layout>
  );
}

export default FoodMenu;
