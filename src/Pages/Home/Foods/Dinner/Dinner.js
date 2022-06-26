import React, { useEffect, useState } from 'react';
import DinnerFood from '../../Food/DinnerFood/DinnerFood';
import './Dinner.css'

const Dinner = () => {

    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])

    return (
        <div>
            <h2 className='food-taitle'>Dinner Food</h2>
            <div className='foods-container'>
                {
                    dinner.map(dinner => <DinnerFood
                        key={dinner.id}
                        dinner={dinner}
                    >
                    </DinnerFood>)
                }
            </div>
        </div>
    );
};

export default Dinner;