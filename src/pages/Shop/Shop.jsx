import { Outlet } from "react-router-dom";
import "./Shop.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Shop() {


    return (
        <div id="shop">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
}
