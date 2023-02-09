import React from 'react';
import photo from '../../images/rely-dms/teamwork.png'

import './RelyDms.css'

const RelyDms = () => {
    return (
        <div className='rely-dms-container'>
            <h1>Why Do Customers Rely on DMS?</h1>
            <div className='rely-dms-photo-and-text'>
                <div className='rely-dms-text'>
                    <p>There are many digital marketing agencies in Bangladesh. But none can be compared to Digital Marketing Solutions (Pvt.) Ltd. because this is the only agency that does not sell a predefined service package. Rather, DMS creates a unique strategy by combining different digital marketing techniques that best match a business's specific needs. </p>

                    <p> Digital Marketing Solutions (Pvt.) Ltd., one of the oldest digital marketing agencies in Bangladesh. The journey of DMS began 10 years ago with the initiative of young Mr. Omar Sani. Now more than 25 young professionals are engaged in different departments of our agency. Our experts are professionals who specialize in their sector. DMS selects the employee after interviewing in 3 steps. Due to this each of our employees is experienced enough in their respective fields. That's why we are different from others. We have separate departments for SEO, <a href="#">Social Media Marketing,</a> Graphics Design,  Web Development, and Training Institute.</p>

                    <p>The long journey in this industry has given us a better understanding of a business and its digital marketing needs. We understand the importance of business growth. Therefore the return on investment (ROI) matters to us. We listen to our clients, understand their pain points, and analyze their business goals. Based on our study, we provide a tailored, affordable, and competitive solution to our clients. Nobody in the industry can offer the best price that DMS can. We understand our client's needs and limitations. Therefore, we design unique and budget-friendly strategies for each client.</p>
                    <button className='find-more'>Find Out More</button>
                </div>
                <div className='rely-dms-photo'>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RelyDms;