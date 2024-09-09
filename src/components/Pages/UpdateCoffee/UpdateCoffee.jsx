import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,coffeeName, chefName, coffeeSupplier, coffeeTaste, coffeeCategory, coffeeDetails, photoURL } = coffee
    const handleUpdateCoffee=e=>{
        e.preventDefault()
        const form = e.target
        const coffeeName = form.coffeeName.value
        const chefName = form.chefName.value
        const coffeeSupplier = form.coffeeSupplier.value
        const coffeeTaste = form.coffeeTaste.value
        const coffeeCategory = form.coffeeCategory.value
        const coffeeDetails = form.coffeeDetails.value
        const photoURL = form.photoURL.value
        const updateCoffee = {
            coffeeName,
            chefName,
            coffeeSupplier,
            coffeeTaste,
            coffeeCategory,
            coffeeDetails,
            photoURL

        }
        fetch( `http://localhost:4000/coffee/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Updated successfull',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
            console.log(data);
        })
    }
    return (
        <div id="add-coffee" className="container mx-auto py-10">
            <Link to='/' className='btn mx-36 px-5 rounded-none my-5'>Back to Home</Link>
            <div className="bg-gray-50 lg:mx-36 py-20">
                <h3 className="text-3xl font-bold text-center">Update Existing Coffee Details</h3>
                <p className="text-center font-semibold"><small>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</small></p>
                <div>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="grid lg:grid-cols-2 gap-6 lg:px-40">
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name='coffeeName' defaultValue={coffeeName} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Chef</span>
                                </div>
                                <input type="text" name='chefName' defaultValue={chefName} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Supplier</span>
                                </div>
                                <input type="text" name='coffeeSupplier' defaultValue={coffeeSupplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Taste</span>
                                </div>
                                <input type="text" name='coffeeTaste' defaultValue={coffeeTaste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <input type="text" name='coffeeCategory' defaultValue={coffeeCategory} placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name='coffeeDetails' defaultValue={coffeeDetails} placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="lg:px-40">
                            <div className="label">
                                <span className="label-text">Photo</span>
                            </div>
                            <input type="text" name='photoURL' defaultValue={photoURL} placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </div>
                        <div className='lg:px-40 my-5'>
                            <input className='btn w-full bg-[#D2B48C] rounded-none' type="submit" value="Add Coffee" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;