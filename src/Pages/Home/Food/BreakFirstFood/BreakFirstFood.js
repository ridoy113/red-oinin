import React from 'react';
import './BreakFirstFood.css'


const BreakFirstFood = ({ breakfirst }) => {
    const { name, discription, img, price } = breakfirst;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{discription}</small></p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default BreakFirstFood;