import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

import './ServiceProvide.css'

const ServiceProvide = () => {
    return (
        <div className='services-parents'>
            <h1>Services That <strong>We Serve With Care</strong></h1>
            <p>Our Result-Oriented Expert Team Focuses On New Creative Ideas With Expertise.</p>

            <div className='service-container'>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>Digital marketing</h2>
                    <p>Our element advanced specialists execute powerful web advertising arrangements in view of your business targets. With 100% modified strategies and centered site advancement methodology, we expand clie..</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>Website development</h2>
                    <p>Our group of specialists manufactures astute sites that perform and surpass your desires. We offer altered intelligent web answers for transforming your online vicinity into a productive element...</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>E-commerce solution</h2>
                    <p>We are promised to provide an excellent design of an e-commerce site as we believe lightweight e-commerce sites and attractive, easy shopping sites are the highest priority for buyers. As we believe s..</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>Custom website design</h2>
                    <p>Expressing your thoughts to live site outlines is our strength. We cut flawless shapes to fabricate innovative sites that draw in clients on both desktop and cell phones with its ultra present-day res..</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>Mobile app development</h2>
                    <p>We fabricate intuitive portable applications to extend your range to potential clients and amplify transformations. Our cross-stage applications intended for iPhone, Blackberry, Android, and so forth ..</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
                <div className='service-category'>
                    <BeakerIcon className='icon' />
                    <h2>Domain and hosting service</h2>
                    <p>Our experts have been highly trained to drive a successful result by implementing unique and genuine creative ideas for our clients. As we believe in creativity and uniqueness, we theoretically and st..</p>
                    <button className='read-more-btn'>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;