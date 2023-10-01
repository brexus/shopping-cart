/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Card.css";

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
        <div className="card">
            <img className="card-img" src={image} alt="" />
            <h1 className="card-title">{title}</h1>
            <h2 className="card-price">{price} $</h2>
        </div>
    );
}
