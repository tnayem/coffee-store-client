import Banner from "../Banner/Banner";
import BannerBottom from "../BannerBottom/BannerBottom";
import InstagramPhoto from "../InstagramPhoto/InstagramPhoto";
import PopulerProducts from "../PopulerProducts/PopulerProducts";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <PopulerProducts></PopulerProducts>
            <InstagramPhoto></InstagramPhoto>
        </div>
    );
};

export default Home;