import React  from 'react';
import {Container } from '@material-ui/core';
import './Card.css';
import {Link} from 'react-router-dom';
import {Fade} from 'react-reveal';




function Card(props) { 
    return (
        <div >
            <Container 
                className = "card col-xl-12 " 
                style = {{
                    backgroundImage : 
                        `url(${props.img})` 
                    ,
                    backgroundPosition : 'center' ,
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : 'cover' , 
                    objectFit : 'fill'
                    }}>
                
                <div className = "card-text-div">
                   <Fade bottom>
                   <h1 className = "card-title">{props.name}</h1>
                   <h3 className = "card-title">{props.subtext}</h3>
                   </Fade>
                   
                </div>
                <div className = "card-button-div row-xl-4">
                    <Link to= {props.name}>
                        <Fade left>
                            <button className = "card-button row-12 "  >Check it out </button>
                        </Fade>
                    </Link >
                    <Link to= {props.url} >
                        <Fade right >
                            <button className = "card-button-2 row-12" > Book Now </button>
                        </Fade>
                    </Link>
                </div>
               
            </Container>
            
        </div>
    );
}

export default Card
