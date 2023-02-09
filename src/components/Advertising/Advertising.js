import React from 'react';
import photo1 from '../../images/advertising-partner/googleAds.jpg'
import photo2 from '../../images/advertising-partner/amazonAds.jpg'
import photo3 from '../../images/advertising-partner/bingAds.jpg'
import photo4 from '../../images/advertising-partner/YoutubeAds.jpg'
import photo5 from '../../images/advertising-partner/metaAds.jpg'
import photo6 from '../../images/advertising-partner/linkedinAds.jpg'
import photo7 from '../../images/advertising-partner/yahooAds.jpg'
import photo8 from '../../images/advertising-partner/pinterestAds.jpg'
import photo9 from '../../images/advertising-partner/tiktokAds.jpg'
import photo10 from '../../images/advertising-partner/ads.jpg'
import './Advertising.css'


const Advertising = () => {
    return (
        <div className='advertising-container'>
            <h1>Our Advertising Partner</h1>
            <div className='advertising-image-container'>
                <div className='advertising-image'>
                    <img src={photo1} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo2} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo3} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo4} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo5} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo6} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo7} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo8} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo9} alt="" />
                </div>
                <div className='advertising-image'>
                    <img src={photo10} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Advertising;