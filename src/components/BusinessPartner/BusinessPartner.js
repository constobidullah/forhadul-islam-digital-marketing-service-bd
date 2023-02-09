import React from 'react';
import photo1 from '../../images/business-partner/google.jpg'
import photo2 from '../../images/business-partner/microsoft.jpg'
import photo3 from '../../images/business-partner/meta.jpg'
import photo4 from '../../images/business-partner/amazon.jpg'
import photo5 from '../../images/business-partner/fiverr.jpg'
import photo6 from '../../images/business-partner/freelancer.jpg'
import photo7 from '../../images/business-partner/shopifu.jpg'
import photo8 from '../../images/business-partner/vipWordpress.jpg'
import photo9 from '../../images/business-partner/salesforce.jpg'
import photo10 from '../../images/business-partner/all.jpg'

import './BusinessPartner.css'

const BusinessPartner = () => {
    return (
        <div className='business-partner-container'>
            <h1>Our Business Partner</h1>
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

export default BusinessPartner;