import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../../../shared_components/layout";
import ViewMoreCard from "./viewMoreCard";

function ViewMorePage() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/viewMoreUpdateGalleryCard")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <section className="max-w-6xl mx-4 lg:mx-auto my-16">
      <div className="text-center my-10"> 
        <h1 className="text-amber-300 font-bold text-5xl">You Can See Some Happy Customers' Reaction Below</h1>
         </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 my-8">
        {data && data.length
          ? data.map((view) => (
              <ViewMoreCard
                title={view.title}
                imageURL={view.imageURL}
                description={view.description}
                date={view.date}
                createdBy={view.createdBy}
                id={view.id}
              />
            ))
          : null}
      </div>
      </section>
    </Layout>
  );
}
export default ViewMorePage;
