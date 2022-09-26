import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../../../../shared_components/layout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const forkImg = new URL(
  "../../../../../public/media/fork.webp",
  import.meta.url
);

function TeamDetail() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/chefsTeam/${params.id}`)
      .then(function (response) {
        console.log(response.data);
        console.log(params.id);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      {data !== null ?
      <section className="max-w-6xl mx-4 xl:mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="py-10">
          <img
            className="rounded-md placeholder:object-cover"
            src={data.imageURL}
            alt="glasses photo"
          />
        </div>
        <div className="mt-10">
          <div className="text-amber-100 font-semibold text-xl my-6 flex items-center justify-start">
            <img src={forkImg} alt="fork" className="w-6 mx-4" />
            <p className="text-center">{data.degree}</p>
            <img src={forkImg} alt="fork" className="w-6 mx-4" />
          </div>
            <h1 className="text-3xl font-bold tracking-wide text-amber-300 lg:text-5xl">
              {data.name}
            </h1>
            <div className="my-6">
              <p className="text-xl text-zinc-100 text-justify">{data.about}</p>
            </div>
            <div className="my-10">
              <p className="text-amber-100 text-xl font-bold pt-4">
                {data.education}
              </p>
              <p className="text-amber-100 text-xl font-bold pt-4">{data.work}</p>
              <p className="text-amber-100 text-xl font-bold pt-4">
                {data.experience}
              </p>
              <p className="text-amber-100 text-xl font-bold pt-4">
                {data.trained}
              </p>
              <Link to="/team">
            <button className="px-5 py-2 my-20 bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
              Go Back
            </button>
          </Link>
            </div>
          </div>
        </div>
    </section> : null }
      
    </Layout>
  );
}

export default TeamDetail;
