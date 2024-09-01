import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import Footer from "../Pages/Home/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;