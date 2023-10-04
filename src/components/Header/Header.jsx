import { Link } from "react-router-dom";
// import "./Header.css";

export default function Header() {


    const navbarLiStyle = "mx-3 font-medium hover:drop-shadow-[0_0px_3px_rgba(255,255,255,1)]";

    return (
        <div 
            id="header" 
            className="flex flex-row items-center justify-between p-[1rem] h-[var(--header-height)] border-b-[1px] border-black"
        >

            <h1 className={"text-4xl font-bold font-mono"}>BREXUS</h1>

            <div className={"flex flex-row justify-center items-center "}>
                <ul id="navbar" className={"flex flex-row justify-center items-center"}>
                    <li className={navbarLiStyle}><Link to="/">Home</Link></li>
                    <li className={navbarLiStyle}><Link to="/shop">All products</Link></li>
                    <li className={navbarLiStyle}><Link to="/shop/mens-clothing">Men&apos;s clothing</Link></li>
                    <li className={navbarLiStyle}><Link to="/shop/womens-clothing">Women&apos;s clothing</Link></li>
                </ul>
                <svg className={"w-[35px] fill-white cursor-pointer"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>             
            </div>

            <svg className={"w-[35px] fill-white cursor-pointer hidden"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>

            
        </div>
    );
}
