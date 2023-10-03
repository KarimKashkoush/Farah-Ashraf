import "./home.css"
import Sociall from "./Sociall"
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Sociall />

                    <div className="home-img"></div>

                    <Data />
                </div>  

                <ScrollDown />
            </div>
        </section>
    );
}

export default Home;
