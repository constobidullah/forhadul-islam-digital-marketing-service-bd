import React from 'react';
import photo from '../../images/who2.jpg'
import './WhoWeAre.css'

const WhoWeAre = () => {
    return (
        <div className='who-we-are-parents'>
            <h1>Who we are </h1>

            <div className='who-we-are-photo-and-write'>
                <div className='who-we-are-photo'>
                    <img src={photo} alt="" />
                </div>
                <div className='who-we-are-write'>
                    <p>DMS is the best <b>Digital Marketing Agency in Bangladesh,</b> one-stop Facebook & Google certified digital marketing company. We have been working in this particular section since 2010. Client satisfaction is our 1st priority, and we believe in 100% quality services. From this perspective, DMS is one of Bangladesh's most successful marketing agencies. We are a full-time digital marketing agency in Bangladesh. You can avail of all kinds of digital marketing services from us. We are already known as the <a href="">best SEO service provider in Bangladesh.</a> Besides, we also provide all kinds of design and development services.</p>

                    <p>We have won the hearts of the online entrepreneurs of the country by providing our precious services. Moreover, DMS has successfully worked with many foreign companies across the country's borders, like the USA, UK, Canada, Australia, UAE, Malaysia, etc. </p>

                    <p>The most demandable services that DMS offers include Search Engine Optimization (SEO), Social Media Marketing (SMM), Email Marketing, Google Ads Management Services, Content Creation, Graphic Design, Web design, Web development, etc. Our only mission is to assist companies in growing their online visibility and bringing in new clients via online channels.</p>

                    <button className='find-out-more'>Find out more </button>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;