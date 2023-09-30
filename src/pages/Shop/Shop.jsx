import { Outlet } from "react-router-dom";
import "./Shop.css";
import Header from "../../components/Header/Header";

export default function Shop() {

    return (
        <div id="shop">
            <h1>/shop</h1>
            <Outlet />
        </div>
    );
}
