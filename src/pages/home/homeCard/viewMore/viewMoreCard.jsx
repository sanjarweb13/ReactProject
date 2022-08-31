import { Link } from "react-router-dom";

function ViewMoreCard(props) {
  return (
    <Link to={`/viewMore/${props.id}`}>
      <div className="shadow-md bg-projectBg  rounded-t-md shadow-zinc-800">
        <div className="p-4">
          <img
            className="aspect-4/3 object-cover rounded-t-md"
            src={props.imageURL}
            alt="image"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="px-5 pb-5">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-amber-300">
            {props.title}
          </h1>
          <p className="my-4 font-semibold text-zinc-100">{props.date}</p>
          <p className="font-semibold text-zinc-100 my-6">
            {props.description}
          </p>
          <div></div>
          <div className="flex justify-between items-center space-x-6">
            <span className="text-xl font-bold text-green-700">
              {props.createdBy}
            </span>
            <button className="px-5 py-2 rounded-sm bg-amber-200 text-zinc-900  font-bold hover:bg-transparent border border-amber-200 hover:text-amber-200 p-2 active:bg-amber-200 active:text-zinc-900">
              Read More
            </button>
          </div>
        </div>
      </div>
     </Link>
  );
}

export default ViewMoreCard;
