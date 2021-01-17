import React , {useState} from 'react';
import './CardTest.css';
import rwb2 from '../assets/roadster/roadster1.jpeg';
import {Fade} from 'react-reveal';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import rwb1 from '../assets/rwb/rwb1.jpeg';
import roadster1 from '../assets/roadster/roadster3.jpeg';
import skyline1 from '../assets/skyline/skyline3.jpeg';
import m1 from '../assets/model3/model3.jpeg';


function CardTest(props) {
  
  console.log(props.items.full_name);
  
    return (
      
    <section id="about" className="about">
      <div className="container col-xl-12" >

        <div className="row ">
          <div className="col-xl-9 order-1 order-xl-0" >
            <Fade >
              <div className="col-12"> 
            <img src={props.items.bg_img} className="cardImg img-fluid col-xl-12 " alt=""/>
            </div>
            </Fade>
            
            <h6 >Everything you're tryna find in your girlfriend. And more</h6>
                        <h3 className="font-weight-bold">Autonomous. Smart. Fast</h3>
                        
          </div>
          <div className="col-xl-3 pt-4 pt-xl-0 order-2 order-xl-1 content" >
                
                  <div>
                    <Fade top >
                    <h6 className="mt-2">{props.items.sub_text}</h6>
                    <h2 className="font-weight-bold">{props.items.full_name}</h2>
                    </Fade>
                    <Fade right>
                    <p className = "">{props.items.para}</p>
                    </Fade> 
                        
                  </div>
                
                    
                    
                <Fade bottom >
                    <div>
                        
                      <div className="container" >

                      <div className="row justify-content-center" >
                      <div className="row mt-5 justify-content-center" >
                        <div className="col-xl-6 col-md-4 col-6">
                          <div className="icon-box">
                            <h6>From 0-60 mph</h6>
                            <h3 className = "countup">
                    
                            <CountUp 
                              end= {props.items.acc_60}
                              decimals = {2}
                              
                              start = {0}
                              duration = {2.6}
                              redraw ="true"
                            
                            /><text >s</text>
                            </h3>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-4 col-6 ">
                        <div className="icon-box">
                            <h6>From 0-100 mph</h6>
                            <h3 className = "countup">
                    
                            <CountUp 
                              end= {props.items.acc_100}
                              decimals = {2}
                              
                              start = {0}
                              duration = {2.6}
                              redraw ="true"
                            
                            /><text >s</text>
                            </h3>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-4 col-6 mt-4 mt-md-3">
                        <div className="icon-box">
                            <h6>Range</h6>
                            <h3 className = "countup">
                    
                            <CountUp 
                              end= {props.items.range}
                                                           
                              start = {0}
                              duration = {2.6}
                              redraw ="true"
                            
                            /><text >mi</text>
                            </h3>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-4 col-6 mt-4 mt-xl-3">
                        <div className="icon-box">
                            <h6>Top Speed</h6>
                            <h3 className = "countup">
                    
                            <CountUp 
                              end= {props.items.topspeed}
                                                         
                              start = {0}
                              duration = {2.6}
                              redraw ="true"
                            
                            /><text >s</text>
                            </h3>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-4 col-6 mt-4 mt-xl-3">
                        <div className="icon-box">
                            <h6>Engine </h6>
                            <h3 className = "countup">
                            {props.items.engine}
                            <text >KW  AWD </text>
                            </h3>
                          </div>
                        </div>
                          <div className="col-xl-6 col-md-4 col-6 mt-4 mt-xl-3">
                          <div className="icon-box">
                            <h6>Horsepower</h6>
                            <h3 className = "countup">
                    
                            <CountUp 
                              end= {props.items.hp} 
                              
                              start = {0}
                              duration = {2.6}
                              redraw ="true"
                            
                            /><text >bhp</text>
                            </h3>
                          </div>
                        </div>
                        <div className="col-12  mt-4 mt-xl-3">
                          
                          <Link to ='Roadster/design'>
                          <button className="ORD_BUTTON">Order</button>
                          </Link>
                          
                        </div>
                        
                        
                      </div>
                      </div>
                      </div>
                    </div>
                </Fade>
                
          </div>
        </div>

      </div>
    </section>
            
        
    )
}

export default CardTest
