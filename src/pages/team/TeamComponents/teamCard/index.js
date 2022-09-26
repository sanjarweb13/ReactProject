import { Link } from "react-router-dom";

function TeamCard(props) {
  return (
    <Link to={`/teamDetail/${props.id}`}>
      <div className="shadow-md shadow-zinc-700 bg-projectBg rounded-t-md">
        <div>
          <img
            className="object-cover rounded-t-md w-full p-3 "
            src={props.imageURL}
            alt="image"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="px-5 pb-5">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-amber-300">
            {props.name}
          </h1>
          <p className="font-semibold text-zinc-100 my-6 line-clamp-2">
            {props.degree}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
