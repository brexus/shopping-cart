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

    const getStarArray = () => {
        const roundRating = Math.round(rating.rate);
        if(roundRating === 0) return [0, 0, 0, 0, 0];
        else if(roundRating === 1) return [1, 0, 0, 0, 0];
        else if(roundRating === 2) return [1, 1, 0, 0, 0];
        else if(roundRating === 3) return [1, 1, 1, 0, 0];
        else if(roundRating === 4) return [1, 1, 1, 1, 0];
        else if(roundRating === 5) return [1, 1, 1, 1, 1];
    };  

    const starArray = getStarArray();
    // {"w-full p-3 rounded-lg grid border-[1px] border-white hover:shadow-lg cursor-pointer mb-[1px]"}
    return (
        <div className={"w-full p-4 grid border-[1px] border-white hover:border-black cursor-pointer mb-[1px] hover:scale-[1.03] transition ease-in-out hover:-translate-y-[3px] hover:scale-110"}>
            <img className="h-[200px] object-cover card-img rounded-2xl pt-4 pb-4 justify-self-center" src={image} alt="" />
            <h1 className="card-title overflow-hidden h-[50px] text-md ">{title}</h1>

            <div id="rating" className="flex flex-row justify-start items-center w-full h-[30px]">

                {starArray && 
                starArray.map((item, index) => {
                    if(item === 1) {
                        return <svg key={`star-${id}-${index}`} className={"w-[20px] fill-yellow-400"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>;
                        
                    } else {
                        return <svg key={`star-${id}-${index}`} className={"w-[20px]  fill-gray-300"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>;
                    }

                })}
            </div>
            
            <h2 className="card-price h-[30px] font-normal text-[18px]">${price}</h2>
        </div>

    );
}
