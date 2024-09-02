import cup1 from '../../../../assets/images/cups/Rectangle 10.png'
import cup2 from '../../../../assets/images/cups/Rectangle 11.png'
import cup3 from '../../../../assets/images/cups/Rectangle 12.png'
import cup4 from '../../../../assets/images/cups/Rectangle 13.png'
import cup5 from '../../../../assets/images/cups/Rectangle 14.png'
import cup6 from '../../../../assets/images/cups/Rectangle 15.png'
import cup7 from '../../../../assets/images/cups/Rectangle 16.png'
import cup8 from '../../../../assets/images/cups/Rectangle 9.png'
const InstagramPhoto = () => {
    return (
        <div className="container mx-auto py-10">
            <p className="text-center font-semibold"><small>Follow Us Now</small></p>
            <h3 className="text-3xl font-bold text-center">Follow on Instagram</h3>
            <div className='grid gap-5 md:grid-cols-3 lg:grid-cols-4'>
                <img className='mx-auto' src={cup1} alt="" />
                <img className='mx-auto' src={cup2} alt="" />
                <img className='mx-auto' src={cup3} alt="" />
                <img className='mx-auto' src={cup4} alt="" />
                <img className='mx-auto' src={cup5} alt="" />
                <img className='mx-auto' src={cup6} alt="" />
                <img className='mx-auto' src={cup7} alt="" />
                <img className='mx-auto' src={cup8} alt="" />
            </div>
        </div>
    );
};

export default InstagramPhoto;