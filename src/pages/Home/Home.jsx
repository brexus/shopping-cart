import { Outlet } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";

export default function Home() {

    return (
        <div id="home">
            <Header />
            <Outlet />
        </div>
    );
}
