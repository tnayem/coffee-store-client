import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import InstagramPhoto from "../InstagramPhoto/InstagramPhoto";
import PopulerProducts from "../PopulerProducts/PopulerProducts";


const Home = () => {
    const coffees = useLoaderData()
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <PopulerProducts coffees={coffees}></PopulerProducts>
            <InstagramPhoto></InstagramPhoto>
        </div>
    );
};

export default Home;