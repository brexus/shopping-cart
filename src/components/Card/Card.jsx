/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import "./Card.css";

export default function Card({
    id,
    category,
    title,
    description,
    price,
    image,
    rating
}) {

    return (
        <div className={"w-full bg-neutral-800 p-6 rounded-2xl"}>
            <img className="card-img rounded-2xl" src={image} alt="" />
            <h1 className="card-title">{title}</h1>
            <h2 className="card-price font-bold text-lg">{price} $</h2>
        </div>

       
    );
}
