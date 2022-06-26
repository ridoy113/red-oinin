import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import BreakFirstFood from '../../Food/BreakFirstFood/BreakFirstFood';
import './BreakFirst.css'

const Breakfirst = () => {

    const [breakfirst, setBreakfirst] = useState([]);

    useEffect(() => {
        fetch('breakfirst.json')
            .then(res => res.json())
            .then(data => setBreakfirst(data))
    }, [])

    return (
        <div>
            <h2 className='food-taitle'>BreakFirst Food</h2>
            <div className='foods-container'>
                {
                    breakfirst.map(breakfirst => <BreakFirstFood
                        key={breakfirst.id}
                        breakfirst={breakfirst}
                    >
                    </BreakFirstFood>)
                }
            </div>
        </div>
    );
};

export default Breakfirst;