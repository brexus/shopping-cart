/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

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
                <h1 className="shop-title text-center text-4xl my-[30px]">Clothing</h1>
                <div className="separator"></div>
                <p className="text-center text-lg">Loading...</p>
            </div>
        );
    }

    if(error) {
        return (
            
            <div className="flex flex-col" id="clothing" >
                <h1 className="shop-title text-center text-4xl my-[30px]">Clothing</h1>
                <div className="separator"></div>
                <p className="text-center text-lg">Error...</p>
            </div>
        );
    }

    return (

        <div className="flex flex-col" id="clothing" >
            <h1 className="shop-title text-center text-4xl my-[30px]">Clothing</h1>
            <div className="separator"></div>
            
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











// import { useEffect, useState } from "react";
// import Card from "../../components/Card/Card";
// import AllClothing from "./AllClothing/AllClothing";
// import MensClothing from "./MensClothing/MensClothing";
// import WomensClothing from "./WomensClothing/WomensClothing";

// export default function Clothing({
//     clothing,
//     data,
//     setData,
//     loading,
//     setLoading,
//     error,
//     setError,

// }) {

//     const getData = async (url) => {
//         try {
//             const response = await fetch(`${url}`, {mode: "cors"});

//             if(!response.ok) {
//                 throw new Error(response.status);
//             }

//             const actualData = await response.json();
//             setData(actualData);
//             setError(null);

//         } catch (err) {
//             setError(err.message);
//             setData(null);
//         } finally {
//             setLoading(false);
//         }
//     };


//     useEffect(() => {

//         if(clothing === "mens-clothing") {
//             getData("https://fakestoreapi.com/products/category/men's%20clothing");

//         } else if (clothing === "womens-clothing") {
//             getData("https://fakestoreapi.com/products/category/women's%20clothing");

//         } else {
//             getData("https://fakestoreapi.com/products/");
//         }

//     }, [clothing]);

//     if(loading) {
//         return <p>Loading...</p>
//     }

//     if(error) {
//         return <p>Error!</p>
//     }

    
//     return (
        
//         <div 
//             // className="shop-items"
//             className={"m-auto p-7 grid gap-[30px] grid-cols-4 max-w-5xl max-md:w-full max-md:grid-cols-2"}
//         >
//             {data &&
                
//                 data.map((item) => {
//                     return (
//                         <Card
//                             key={`card-${item.id}`}
//                             id={item.id}
//                             category={item.category}
//                             title={item.title}
//                             description={item.description}
//                             price={item.price}
//                             image={item.image}
//                             rating={item.rating}
//                         />
//                     );
//                 })
            
//             }
//         </div>

//     );
// }
