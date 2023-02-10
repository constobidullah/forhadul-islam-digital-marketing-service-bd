import React from 'react';
import { LinkIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { Bars4Icon } from '@heroicons/react/24/solid'
import { ChartBarIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import './Diffrent.css'

const Diffrent = () => {
    return (
        <div className='diffrent-container'>
            <h1>Why we are diffrent!</h1>
            <div className='parents-diffrent'>
                <div>
                    <div className='icon-and-header'>
                        <ChartBarIcon className='link-icon' />
                        <h2>We are result oriented expert team</h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>We are always promised to get the best result on our every project. We believe in best outcomes with an appropriate budget. Where our client will get a huge outcome with a minimal investment.</p>
                    </div>
                </div>
                <div>
                    <div className='icon-and-header'>
                        <LinkIcon className='link-icon' />
                        <h2>We interface you with the customer on the go </h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>We convey everything responsive so that your online business is effortlessly open by everybody.</p>
                    </div>
                </div>
                <div>
                    <div className='icon-and-header'>
                        <UserGroupIcon className='link-icon' />
                        <h2>Our experts works as won the projects</h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>Our experts are committed to providing their best to client requirements. We are a team and we believe when a client handover a prone to us to make it successful, it is mandatory that we take that project not as the business, as we believe in taking the project as ours. Because We believe in service rather than just doing business.</p>
                    </div>
                </div>
                <div>
                    <div className='icon-and-header'>
                        <HandThumbUpIcon className='link-icon' />
                        <h2>Integratade model and collective methdology</h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>What makes us incredible is our coordinated computerized plan of action that uses community oriented way to deal with change imaginative thoughts into fruitful online organizations.</p>
                    </div>
                </div>
                <div>
                    <div className='icon-and-header'>
                        <UserIcon className='link-icon' />
                        <h2>We make the system and execute it</h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>Beginning with the point by point business investigation of your image, item, and market; we add to an arrangement; characterize an exceptional brand procedure and recount a convincing story online.</p>
                    </div>
                </div>
                <div>
                    <div className='icon-and-header'>
                        <Bars4Icon className='link-icon' />
                        <h2>We resolved the problem and unique and experties way</h2>
                    </div>
                    <div className='diffrent-para'>
                        <p>Sometimes you may find your company position in the threat from your competitors by attacking you with different strategies. Our experts are also theoretically practically trained on environmental threat And they are well equipped with all kinds of essential strategy to protect and let you win.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diffrent;