import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import './MemorableJourney.css'

const MemorableJourney = () => {
    return (
        <div className='memorable-journey-container'>
            <h1>Our Memorable Journey</h1>

            <div className='icon-parents'>
                <div className='icon-container'>
                    <BriefcaseIcon className='icon'/>
                    <h2>6+</h2>
                    <p>Years of experience</p>
                </div>
                <div className='icon-container'>
                    <UsersIcon className='icon'/>
                    <h2>300+</h2>
                    <p>Honorable Clients</p>
                </div>
                <div className='icon-container'>
                    <UserGroupIcon className='icon'/>
                    <h2>65+</h2>
                    <p>Professional experties</p>
                </div>
                <div className='icon-container'>
                    <GlobeAltIcon className='icon'/>
                    <h2>46+</h2>
                    <p> Countries </p>
                </div>
            </div>
        </div>
    );
};

export default MemorableJourney;