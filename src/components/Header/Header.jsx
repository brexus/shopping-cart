import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <>
            <div id="header">
                <h1>LOREMLOGO</h1>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">All products</Link></li>
                    <li><Link to="/shop/mens-clothing">Men&apos;s clothing</Link></li>
                    <li><Link to="/shop/womens-clothing">Women&apos;s clothing</Link></li>
                </ul>
                
            </div>
            <div className="separator"></div>
        </>
    );
}
