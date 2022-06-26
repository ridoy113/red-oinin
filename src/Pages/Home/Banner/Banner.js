import React from 'react';
import './Banner.css'
import banner from '../../../img/images/bannerbackground.png'

const Banner = () => {
    return (
        <div className='banner'>

            <div className='search'>
                <h2 className='onion_text'>Best Food From <br /> <span className='onion'>Red-Onion</span></h2>
                <input className='search-inp' type="search" name="" id="" placeholder='  Your Favourite Food Name...' />
                <button className='search-btn'>Search</button>
            </div>
        </div>
    );
};

export default Banner;