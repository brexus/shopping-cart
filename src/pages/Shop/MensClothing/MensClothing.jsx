import { Outlet } from "react-router-dom";
import "./MensClothing.css";

export default function MensClothing() {
    return (
        <div id="mens-clothing">
            <h1>mens-clothing</h1>
            <Outlet />
        </div>
    );
}
