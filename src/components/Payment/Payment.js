import React from 'react';
import logo1 from '../../images/payment-partner/bkash.png'
import logo2 from '../../images/payment-partner/nagad.png'
import logo3 from '../../images/payment-partner/doutch.png'
import logo4 from '../../images/payment-partner/brac.png'
import logo5 from '../../images/payment-partner/rocket.jpg'
import logo6 from '../../images/payment-partner/payoneer.png'
import logo7 from '../../images/payment-partner/paypal.png'
import logo8 from '../../images/payment-partner/visa.png'
import logo9 from '../../images/payment-partner/wise.png'
import logo10 from '../../images/payment-partner/xoom.jpg'
import './Payment.css'

const Payment = () => {
    return (
        <div className='payment-partner-all-parents'>
            <h1>Our Payment Partner</h1>
            <div className='payment-partner-image-container'>
                <div className='payment-image'>
                    <img src={logo1} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo2} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo3} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo4} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo5} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo6} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo7} alt="" />
                </div>
                <div className='payment-image'> 
                    <img src={logo8} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo9} alt="" />
                </div>
                <div className='payment-image'>
                    <img src={logo10} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Payment;