import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import './ContactFrom.css'

const ContactFrom = () => {
    return (
        <div className='contact-from-main-container'>

            <div className='contact-from-container'>

                <div className='contact-page'>
                    <h2>Get in touch</h2>
                    <div className='personal-info'>
                        <input className='styling-box' type="text" name="First name" id="" placeholder='First name' required />
                        <input className='styling-box' type="text" name="First name" id="" placeholder='Last name' required />
                        <input className='styling-box' type="email" name="" id="" placeholder='Email' required />
                        <input className='styling-box' type="number" name="" id="" placeholder='Phone' required />
                    </div>
                    <div className='information'>
                        <input className='styling-box' type="text" name="" id="" placeholder='Address' required />
                        <input className='styling-box' type="text" name="" id="" placeholder='Subject' required />
                        <textarea className='styling-box' name="" id="" cols="2" rows="2.5" required placeholder='Type here your message on details'></textarea>
                    </div>
                </div>

                <div className='icon-main-container'>
                    <div className='single-contact-icon'>
                        <FontAwesomeIcon icon={faPhone} className="icon-single" />
                        <a href="tel:+8801409759124">01409759124</a>
                    </div>
                    <div className='single-contact-icon'>
                        <FontAwesomeIcon icon={faMessage} className="icon-single" />
                        <a href="mailto:seshasi124@gmail.com">seshasi124@gmail.com</a>
                    </div>
                    <div className='single-contact-icon'>
                        <FontAwesomeIcon icon={faMobileAndroid} className="icon-single" />
                        <a href="whatsapp://send?phone=01409759124">Chat with me on WhatsApp</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactFrom;