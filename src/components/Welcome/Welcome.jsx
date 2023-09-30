import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {

    return (
        <div id="welcome">
            <h1>Welcome</h1>
            <h2>buy something</h2>

            <Link to="/shop">
                <button
                    id="welcome-shop-btn"
                >
                    Shop
                </button>
            </Link>
        </div>
    );
}
