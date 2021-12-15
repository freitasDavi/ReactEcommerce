import Announcement from "../components/Announcement";
import NavBar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
        </div>
    );
}

export default Home;