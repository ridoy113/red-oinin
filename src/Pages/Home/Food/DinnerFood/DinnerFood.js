import React from 'react';
import './DinnerFood.css'

const DinnerFood = ({ dinner }) => {
    const { name, discription, img, price } = dinner;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{discription}</small></p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default DinnerFood;