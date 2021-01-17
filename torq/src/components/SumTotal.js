import React from 'react';


function SumTotal(props) {
    return (
        <div className="sumtotal" >
            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                <a class="navbar-brand" href="#"> Purchase price <h6>Delivery expected in 7-8 weeks</h6> </a>
               
                <a className="navbar-item mr-1" > <h3 style = {{
                    fontWeight : "600"
                }}>$ 45499</h3> </a>
                <a className="navbar-item mr-0">
                    <button style={{
                        border : 'none' ,
                        color : '#ffffff' ,
                        borderRadius : '20px' , 
                        backgroundColor : 'rgb(40, 116, 231)',
                        padding : '10px' ,
                        paddingLeft : '15px' ,
                        paddingRight : '15px' ,
                        
                    }}>
                        Order Now
                    </button>
                </a>
            </nav>
        </div>
    )
}

export default SumTotal ;
