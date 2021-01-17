import React  from 'react';
import "./Catalog.css";
import model3 from '../assets/model3/model3.jpeg';
import Skyline from '../assets/skyline/skyline1.jpeg';
import Roadster from '../assets/roadster/roadster1.jpeg';
import rwb1 from '../assets/rwb/rwb9.jpeg';

import CardLeft from './CardLeft';

function Catalog(props) {
     
    return (
        
        <div className="Catalog">
            
            <CardLeft
                items = {props.items}
                img = {
                    (props.items.name==="RWB-911") ? {rwb1} : (props.items.name === 'Model-3') ? {model3} : (props.items.name==='Skyline') ? {Skyline} : {Roadster}
                }
            />
            
            
        </div>
    )
}

export default Catalog


