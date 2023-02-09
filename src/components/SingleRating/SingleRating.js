import React from 'react';
import photo1 from '../../images/singleRating/trustpilot.png';
import photo2 from '../../images/singleRating/meta.png';
import photo3 from '../../images/singleRating/googlemama.png';
import { StarIcon } from '@heroicons/react/24/solid'
import './SingleRating.css'
const SingleRating = () => {
    return (
        <div className='single-rating-parents-container'>
            <h1>Digital marketing solution Pvt Ltd.</h1> 
            
            <div className='single-rating-container'>
                <div className='single-rating-item'>
                    <img src={photo1} alt="" />
                    <div>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                    </div>
                    <p><strong>4.8 out of 5</strong></p>
                </div>
                <div className='single-rating-item'>
                    <img src={photo2} alt="" />
                    <div>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                    </div>
                    <p><strong>4.8 out of 5</strong></p>
                </div>
                <div className='single-rating-item'>
                    <img src={photo3} alt="" />
                    <div>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                        <StarIcon className='star-icon'/>
                    </div>
                    <p><strong>4.8 out of 5</strong></p>
                </div>
            </div>
        </div>
    );
};

export default SingleRating;