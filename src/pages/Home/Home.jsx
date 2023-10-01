import "./Home.css";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";
import Footer from "../../components/Footer/Footer";

export default function Home() {

    return (
        <div id="home">
            <Header />

            <Welcome />
            
            <Footer />
        </div>
    );
}
