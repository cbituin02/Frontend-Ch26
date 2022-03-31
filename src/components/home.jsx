
import "./home.css";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="home-page">
            <h1>Star Stickers Store</h1>
            <h4>Cool Cartoon Stickers!</h4>

            <Link class="btn btn-outline-dark" to="/catalog" className="btn btn-info">
                Check our amazing catalog!
            </Link>
        </div>
    );
};

export default Home;