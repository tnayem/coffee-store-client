import { Link } from "react-router-dom";

const PopulerProducts = () => {
    return (
        <div className="container mx-auto py-10">
            <p className="text-center font-semibold"><small>--- Sip & Savor ---</small></p>
            <h3 className="text-3xl font-bold text-center">Our Popular Products</h3>
            <div className="text-center ">
                <Link to='/addCoffee' className="btn btn-xs bg-orange-300 rounded-none">Add Coffee</Link>
            </div>
            
        </div>
    );
};

export default PopulerProducts;