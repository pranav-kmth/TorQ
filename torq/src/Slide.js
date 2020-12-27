import React from 'react';
import Card from './components/Card';
import './Slide.css';
import rwb1 from './assets/rwb/rwb1.jpeg';
import roadster1 from './assets/roadster/roadster3.jpeg';
import skyline1 from './assets/skyline/skyline3.jpeg';
import m1 from './assets/model3/model3.jpeg';

function Slide() {
    return (
        <div className="slide" >
                <Card
                name = "RWB-911" 
                title = "RWB Porsche 911"
                subtext = "Starting at $219,999"
                img = {rwb1}
                re-url = "$"
                />
                <Card 
                name = "Roadster"
                title = "Roadster"
                subtext = "Starting at $249,999"
                img = {roadster1}
                re-url = "$"
                />
                <Card 
                name = "Skyline"
                title = "Skyline"
                subtext = "Starting at $149,999"
                img = {skyline1}
                re-url = "$"
                />
                <Card 
                name = "Model-3"
                title = "Tesla Model-3"
                subtext = "Starting at $31,999"
                img = {m1}
                re-url = "$"
                />
        </div>
    )
}

export default Slide
