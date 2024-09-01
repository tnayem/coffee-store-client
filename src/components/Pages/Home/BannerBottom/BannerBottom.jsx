import icon1 from '../../../../assets/images/icons/1.png'
import icon2 from '../../../../assets/images/icons/2.png'
import icon3 from '../../../../assets/images/icons/3.png'
import icon4 from '../../../../assets/images/icons/4.png'

const BannerBottom = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100'>
            <div className='m-10'>
                <img src={icon1} alt="" />
                <h6 className='font-semibold text-xl'>Awesome Aroma</h6>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='m-10'>
                <img src={icon2} alt="" />
                <h6 className='font-semibold text-xl'>Awesome Aroma</h6>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='m-10'>
                <img src={icon3} alt="" />
                <h6 className='font-semibold text-xl'>Awesome Aroma</h6>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='m-10'>
                <img src={icon4} alt="" />
                <h6 className='font-semibold text-xl'>Awesome Aroma</h6>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
        </div>
    );
};

export default BannerBottom;