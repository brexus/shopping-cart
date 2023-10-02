import { useEffect, useState } from "react";
// import "./WomensClothing.css";
import Card from "../../../components/Card/Card";

export default function WomensClothing() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing", {mode: "cors"});

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

        <div className="shop-container" id="womens-clothing">
            <h1 className="shop-title">All clothing</h1>
            <div className="separator"></div>

            {data &&
                <div className="shop-items">
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
