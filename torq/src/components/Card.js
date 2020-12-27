import React from 'react';
import {Container } from '@material-ui/core';
import './Card.css';
import {Link} from 'react-router-dom';
import {Fade} from 'react-reveal';


function Card(props) {

    const order_url = `${props.name}/design`;

    return (
        <div >
            <Container 
                className = "card" 
                style = {{
                    backgroundImage : `url(${props.img})` ,
                    width : '100%' ,
                    height : '100%' , 
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : '100%' , 
                    objectFit : 'fill'
                    }}>
                
                <div className = "card-text-div">
                   <Fade bottom>
                   <h1 className = "card-title">{props.title}</h1>
                   <h3 className = "card-title">{props.subtext}</h3>
                   </Fade>
                   
                </div>
                <div className = "card-button-div">
                    <Link to= {props.name}>
                        <Fade left>
                            <button className = "card-button"  >Check it out </button>
                        </Fade>
                    </Link >
                    <Link to= {order_url} >
                        <Fade right >
                            <button className = "card-button-2" href={order_url}> Book Now </button>
                        </Fade>
                    </Link>
                </div>
               
            </Container>
            
        </div>
    );
}

export default Card
