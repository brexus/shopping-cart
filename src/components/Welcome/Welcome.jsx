import { Link } from "react-router-dom";
// import "./Welcome.css";

export default function Welcome() {

    return (
        <div 
            id="welcome" 
            className="bg-[url('welcome.jpg')] w-full h-[calc(100vh-var(--header-height))] bg-[center] bg-cover flex flex-col items-center justify-center px-[50px] pb-[50px] "
        >
            <div>
                <h1 className=" text-center text-8xl font-bold">Welcome</h1>
                <h2 className="text-center text-2xl">buy yourself some clothes...</h2>
            </div>


            <Link to="/shop">
                <button
                    id="welcome-shop-btn"
                    className={`font-medium text-3xl py-[3px] px-[20px] rounded-3xl border-white border-[2px] mt-5 
                        hover:scale-105 transition ease-in-out hover:-translate-y-[8px] hover:scale-110 backdrop-blur-sm duration-300`}
                >
                    Shop
                </button>
            </Link>

            
        </div>
    );
}
