import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TeamCard from "./teamCard";

function ChefsTeam() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/chefsTeam")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  return (
    <div className="max-w-6xl mx-4 lg:mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 my-20">
      {data && data.length
        ? data.map((chefs) => (
            <TeamCard
              imageURL={chefs.imageURL}
              name={chefs.name}
              degree={chefs.degree}
              id={chefs.id}
            />
          ))
        : null}
    </div>
  );
}

export default ChefsTeam;
