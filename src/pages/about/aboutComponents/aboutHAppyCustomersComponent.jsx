import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const forkImg = new URL("../../../media/fork.png", import.meta.url);

function HappyCustomers() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/happyCustomers")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-4 lg:mx-auto my-20">
      <div>
        <p className="text-amber-100 font-semibold text-lg my-10 items-center flex justify-center">
          <img src={forkImg} alt="fork" className="w-12 mx-4" />
          Testimony
          <img src={forkImg} alt="fork" className="w-12 mx-4" />
        </p>
        <h1 className="text-amber-200 font-bold tracking-wider text-5xl my-8 mx-6 text-center">
          Happy Customers
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
        {data && data.length
          ? data.map((chef) => (
            <div className="flex space-x-6">
            <img src={chef.imageURL} alt="img" className="w-[150px] h-[150px] object-cover "/>
            <div>
              <p className="italic line-clamp-2 text-orange-100 font-semibold">
                {chef.word}
              </p>
              <p className="text-4xl text-amber-200 font-bold my-4">
                {chef.name}
              </p>
              <p className="text-xl font-bold text-amber-100">{chef.work}</p>
            </div>
          </div>
            ))
          : null}
      </div>
    </section>
  );
}

export default HappyCustomers;
