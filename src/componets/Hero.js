import React from 'react';
import photo from '../photoGrid.png';
import './style.css';



export default function Hero(){
    return (
        <section className='hero'>
            <img src={photo} className="photoGrid" />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--para">Join unique interactive activities led by one-of-a-kind hosts-all leaving home.</p>

        </section>
        
    );
}