import React, { useEffect, useState } from 'react';
import LunchFood from '../../Food/LunchFood/LunchFood';
import './Lunch.css'

const Lunch = () => {

    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])

    return (
        <div>
            <h2 className='food-taitle'>Lunch Food</h2>
            <div className='foods-container'>
                {
                    lunch.map(lunch => <LunchFood
                        key={lunch.id}
                        lunch={lunch}
                    >
                    </LunchFood>)
                }
            </div>
        </div>
    );
};

export default Lunch;