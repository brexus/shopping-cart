import { useEffect, useState } from "react";
// import "./AllClothing.css";
import Card from "../../../components/Card/Card";

export default function AllClothing() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products", {mode: "cors"});

                if(!response.ok) {
                    throw new Error(response.status);
                }

                const actualData = await response.json();
                console.log(actualData);
                setData(actualData);
                setError(null);

            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error!</p>
    }

    return (

        <div 
            // className="shop-container"
            className="flex flex-col"

            id="all-clothing"
        >
            <h1 className="shop-title text-center text-4xl my-[30px]">All clothing</h1>
            <div className="separator"></div>

            {data &&
                <div 
                    // className="shop-items"
                    className={"m-auto p-7 grid gap-[30px] grid-cols-4 max-w-5xl max-md:w-full max-md:grid-cols-2"}
                >
                {data.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    );
                })}
            </div>
            }
            
        </div>
    );
}
