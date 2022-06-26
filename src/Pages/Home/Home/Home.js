import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Breakfirst from '../Foods/BreakFirst/Breakfirst';
import Dinner from '../Foods/Dinner/Dinner';
import Lunch from '../Foods/Lunch/Lunch';
import './Home.css'


const Home = () => {
    const [tab, setTab] = useState('breakFirst')
    return (

        <div>
            <Banner></Banner>
            <div className='d-flex justify-content-center my-5'>
                <div>
                    <button className='food_btn' onClick={() => setTab("breakFirst")}>BreakFirst</button>
                    <button className='food_btn mx-4' onClick={() => setTab("lunch")}>Lunch</button>
                    <button className='food_btn' onClick={() => setTab("dinner")}>Dinner</button>
                </div>
            </div>
            {/* <Link to='/breakfirst'>Breakfirst</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link> */}
            {tab === 'breakFirst' && <Breakfirst></Breakfirst>}
            {tab === 'lunch' && <Lunch></Lunch>}
            {tab === 'dinner' && <Dinner></Dinner>}
            <button className=''>CheckOut Your Food</button>
        </div>
    );
};

export default Home;