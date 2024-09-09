import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const PopulerProducts = ({ coffees }) => {
    return (
        <div className="container mx-auto py-10">
            <p className="text-center font-semibold"><small>--- Sip & Savor ---</small></p>
            <h3 className="text-3xl font-bold text-center">Our Popular Products</h3>
            <div className="text-center ">
                <Link to='/addCoffee' className="btn btn-xs bg-orange-300 rounded-none">Add Coffee</Link>
            </div>
            {/* products */}
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>

        </div>
    );
};
// Props type validation
PopulerProducts.propTypes = {
    coffees: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default PopulerProducts;