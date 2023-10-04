import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Shop() {

    return (
        <div id="shop" className="min-h-screen flex flex-col">
            <Header />
    
            <Outlet />

            <Footer />
        </div>
    );
}
