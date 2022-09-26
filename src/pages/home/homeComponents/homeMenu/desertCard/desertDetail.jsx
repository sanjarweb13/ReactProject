import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Layout } from "../../../../../shared_components/layout";

function DesertDetail() {
  const params = useParams();
  const [data, setData] = useState([]);
  console.log(params.id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/desertMenu/${params.id}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <section className="max-w-6xl mx-4 md:mx-auto">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-amber-300 lg:text-5xl">
                {data.name}
              </h1>
              <div className="my-6">
                <p className="text-xl text-amber-100 line-clamp-3">
                  {data.description}
                </p>
              </div>
              <div className="font-bold">
                <p className="text-green-600 text-xl font-bold">{data.born}</p>
                <p className="text-lg text-rose-400">$ {data.price}</p>
              </div>
            </div>

            <Link to="/desertMenu">
              <button className="px-5 py-2 my-6 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
                Go Back
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={data.imageURL}
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-4 lg:mx-auto my-16">
        <h2 className="text-5xl text-center font-bold py-4 text-amber-300">
          {data.name}
        </h2>
        <p className="text-2xl text-justify font-bold py-3 text-zinc-100">
          {data.description}
        </p>
      </section>
    </Layout>
  );
}

export default DesertDetail;
