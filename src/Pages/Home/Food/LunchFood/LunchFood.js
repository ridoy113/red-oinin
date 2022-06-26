import React from 'react';
import './LunchFood.css'

const LunchFood = ({ lunch }) => {
    const { name, discription, img, price } = lunch;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{discription}</small></p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default LunchFood;