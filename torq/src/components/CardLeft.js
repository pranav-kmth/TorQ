import React from 'react';
import {Container} from 'react-bootstrap';
import './CardLeft.css';
import rwb2 from '../assets/roadster/roadster1.jpeg';
import CountUp from 'react-countup';
import {Fade} from "react-reveal";
import { Link } from 'react-router-dom';


function CardLeft(props) {
    return (
        <div className = "CardLeft">
            <Container className="right">
                <div 
                    className = "right-div" 
                    style = {{
                        backgroundImage : `url(${rwb2})`  ,
                        width : '100%' ,
                        height : '90%' , 
                        backgroundSize : '100%',
                        backgroundRepeat : 'no-repeat',
                        objectFit : 'contain'
,                       
                    }}    
                >                
                < div className = "right-bottom-div">
                   <div className = "div-block">
                       <text>
                           From 0-60 mph
                       </text>
                       <br/>
                       
                        <h3 className = "countup">
                    
                        <CountUp 
                            end= {1.9} 
                            decimals = {2}
                            
                            start = {0}
                            duration = {2.6}
                            redraw ="true"
                            
                        /> s
                        </h3>
                   </div>
                   <div className="line-right">

                   </div>
                   <div className="line-left">

                   </div>
                  
                   <div className = "div-block">
                        <text>
                            From 0-100 mph
                        </text>
                        <br/>
                        
                        <h3 className="countup" >
                        <CountUp 
                            end= {4.2} 
                            decimals = {2}
                            
                            start = {0}
                            duration = {2.6}
                            redraw ="true"
                            
                        /> s
                        </h3>

                   </div>
                   <div className="line-right">
                        
                   </div>
                   <div className="line-left">

                   </div>
                   <div className = "div-block">
                        <text>
                            Range
                        </text>
                        <br/>
                        
                        <h3 className = "countup">
                        <CountUp 
                            end= {620}                             
                            
                            start = {0}
                            duration = {2.6}
                            redraw ="true"
                            
                        /> Kms
                       
                        </h3>

                   </div>
                    
                    
                </div>
                  
                </div>
                
            </Container>

            <Container className="left">
                    <Fade bottom >
                    <div>
                        <h6 >Performance meets Simplicity</h6>
                        <h2>Tesla Model 3</h2>
                        <br/>
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.</p>
                    </div>
                    </Fade>
                    <hr />
                    
                    <Fade bottom >
                    <div>
                        <h6 >Everything you're tryna find in your girlfriend. And more</h6>
                        <h2>Autonomous. Smart . Fast</h2>
                        <br/>
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.</p>
                    </div>
                    </Fade>
                   <Link to ='Roadster/design'>
                    <button className="ORD_BUTTON">Order</button>
                   </Link>

            </Container>
                
  
        </div>
    )
}

export default CardLeft;
