import React  , {Component } from 'react';
import Card from './components/Card';
import './Slide.css';
import rwb1 from './assets/rwb/rwb1.jpeg';
import skyline from './assets/skyline/skyline3.jpeg';
import roadster from './assets/roadster/roadster3.jpeg';
import m1 from './assets/model3/model1.jpeg';


export default class Slide extends Component {
    
    render() {
        

        return (
            <div className="slide" >
                
                <Card
                name = "RWB-911" 
                title = "RWB Porsche 911"
                subtext = "Starting at $219,999"
                img = {rwb1}
                url = "RWB-911/design"
                />
                <Card 
                name = "Roadster"
                title = "Roadster"
                subtext = "Starting at $249,999"
                img = {roadster}
                url = "Roadster/design"
                />
                <Card 
                name = "Skyline"
                title = "Skyline"
                subtext = "Starting at $149,999"
                img = {skyline}
                url = "Skyline/design"
                />
                <Card 
                name = "Model-3"
                title = "Tesla Model-3"
                subtext = "Starting at $31,999"
                img = {m1}
                url = "Model-3/design"
                />




                
        </div>
        );
    }
}


