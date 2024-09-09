import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, chefName, coffeeSupplier, coffeeTaste, coffeeCategory, coffeeDetails, photoURL } = coffee
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex bg-base-100 shadow-xl items-center py-5 px-10">
                <figure>
                    <img
                        src={photoURL}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between items-center w-full">
                    <div className="ms-10">
                        <p>Name: {coffeeName}</p>
                        <p>Chef: {chefName}</p>
                        <p>Chef: {coffeeSupplier}</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn my-5">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;