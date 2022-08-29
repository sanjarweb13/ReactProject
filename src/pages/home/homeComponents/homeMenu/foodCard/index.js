import { Link } from "react-router-dom";

function FoodCard(props) {
    return ( 
        <Link to={`/foodDetail/${props.id}`}>
        <div className="shadow-md shadow-zinc-700 bg-projectBg rounded-t-md">
        <div>
          <img
            className="aspect-4/3 object-cover rounded-t-md w-full p-3 "
            src={props.imageURL}
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="mt-4 text-3xl font-bold tracking-tight text-amber-300">
            {props.name}
          </h5>
          <h5 className="my-4 font-semibold text-rose-400 text-xl">
           $ {props.price}
          </h5>
          <h5 className="font-semibold text-zinc-100 my-6 line-clamp-2">
            {props.description}
          </h5>
          <div></div>
          <div className="flex justify-between items-center space-x-6">
            <span className="text-xl font-bold text-green-700">
              {props.born}
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

export default FoodCard;