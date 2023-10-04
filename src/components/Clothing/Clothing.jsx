/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Clothing({url}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getData() {
            try {
                const response = await fetch(`${url}`, {mode: "cors"});

                if(!response.ok) {
                    throw new Error(response.status);
                }

                const actualData = await response.json();
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
    }, [url]);

    if(loading) {
        return (
            <div className="flex flex-col" id="clothing" >
                <h1 className="border-b-[1px] border-black shop-title text-center text-4xl h-[75px] flex justify-center items-center">Clothing</h1>

                <div className="text-2xl h-[calc(100vh-75px-75px)] flex justify-center items-center ">
                    <svg className="w-[80px]" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                            <path fill="#0f0f0f" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform 
                                attributeName="transform" 
                                attributeType="XML" 
                                type="rotate"
                                dur="1s" 
                                from="0 50 50"
                                to="360 50 50" 
                                repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>

            </div>
        );
    }

    if(error) {
        return (
            <div className="flex flex-col" id="clothing" >
                <h1 className="border-b-[1px] border-black shop-title text-center text-4xl h-[75px] flex justify-center items-center">Clothing</h1>

                <div className="text-2xl h-[calc(100vh-75px-75px)] flex justify-center items-center ">
                    <p className="text-red-600 font-bold">Error!</p>
                </div>

            </div>
        );
    }

    return (

        <div className="flex flex-col" id="clothing" >
            <h1 className="border-b-[1px] border-black shop-title text-center text-4xl h-[75px] flex justify-center items-center">Clothing</h1>
            
            <div className={"m-auto p-7 grid gap-[30px] grid-cols-4 max-w-5xl max-md:w-full max-md:grid-cols-2"} >
                {data &&
                    data.map((item) => {
                        return (
                            <Card
                                key={`card-${item.id}`}
                                id={item.id}
                                category={item.category}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        );
                    })
                }
            </div>
        </div>
 
    );
}
