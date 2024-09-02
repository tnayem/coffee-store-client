import { Link } from 'react-router-dom';
import './AddCoffee.css'
const AddCoffee = () => {
    return (
        <div id="add-coffee" className="container mx-auto py-10">
            <Link className='btn mx-36 px-5 rounded-none my-5'>Back to Home</Link>
            <div className="bg-gray-50 mx-36 py-20">
                <h3 className="text-3xl font-bold text-center">Add New Coffee</h3>
                <p className="text-center font-semibold"><small>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</small></p>
                <div>
                    <form>
                        <div className="grid lg:grid-cols-2 gap-6 px-40">
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="px-40">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </div>
                        <div className='px-40 my-5'>
                            <input className='btn w-full bg-orange-400' type="submit" value="Add Coffee" />
                        </div>
                    </form>
                </div>
            </div>

            {/* <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label> */}
        </div>
    );
};

export default AddCoffee;