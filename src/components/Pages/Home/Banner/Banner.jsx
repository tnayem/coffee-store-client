import bannerImg from '../../../../assets/images/more/3.png'

const Banner = () => {
    return (
        <div
            className="hero py-32"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className=" bg-opacity-60 "></div>
            <div className="hero-content text-neutral-content text-left">
                <div className="max-w-md md:ml-96">
                    <h1 className="mb-5 text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">It s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;