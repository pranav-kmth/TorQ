import React , {useState} from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import './Customise.css';
import CountUp from 'react-countup';
import SumTotal from './SumTotal';

function Customise() {
	const [img , setImg] = useState('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPMR,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
	const [color , setColor] = useState('Red Multicoat');
	const [wheel , setWheel] = useState("18'' Aero wheels")
	const [range , setRange] = useState('Performance')
	const [topSpeed , setTopSpeed] = useState('162')
	const [acc , setAcc] = useState('3.1')
	const [mil , setMil] = useState('315')



	const changewheel = (e) => {
		console.log(e)
		if(e.target.parentElement.value==='18wheels')
		{
			setWheel("18'' Aero wheels")
		}
		if(e.target.parentElement.value==='19wheels')
		{
			setWheel("19'' Sports wheels")	
		}

	}

	const changeRange = e => {
		console.log(e);
		if(e.target.value==="Standard"){
			setRange('Standard')
			setTopSpeed('140')
			setMil('263')
			setAcc('5.3')
		}
		if(e.target.value==="Performance"){
			setRange('Performance')
			setTopSpeed('162')
			setMil('315')
			setAcc('3.1')
		}
		if(e.target.value==="Long Range"){
			setRange('Long Range')
			setTopSpeed('145')
			setMil('353')
			setAcc('4.2')
		}

	}

	const changeImg = (e) => {
		console.log(e);
		if(e.target.value==="red")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPMR,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Red Multicoat');
			console.log('red')
		}
		if(e.target.value==="blue")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPSB,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Deep Blue Metallic')
			console.log('blue')
		}
		if(e.target.value==="white")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPSW,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Pearl White Multicoat');
		}
		if(e.target.value==="sortablack")
		{	setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PMNG,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			
			setColor('Midnight Silver Multicoat')
		}
		if(e.target.value==="black")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PBSB,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Solid Black');
		}
		if(e.target.name==="intblack")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$IPB0,$PMNG,$MT315&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Solid Black');
		}
		if(e.target.name==="intwhite")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$IPW0,$PMNG,$MT315&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Solid Black');
		}
	}


    return (
        <div className="col-12">
			<form >
            <Tabs defaultActiveKey="Exterior" id="uncontrolled-tab-example">
				<Tab eventKey="Exterior" title="Exterior" className="tab">
				<div class="container m-2 col-xl-12">
					<div className="row cust_row" >
						<div className="col-xl-9 col-12">
							<img className = "cust_img" 
							src = {img}
							/>

						</div>
						<div className = "col-xl-3 col-12">
							<div className= "column">
								<div className = "cust_tab">
									<h2>
										Colors
									</h2>
									<span>
										<button 
										className="cust_button"
										type = "radio"
										value = "red"
										name = "ext_color"
										checked
										style = {{
											backgroundImage: "linear-gradient(to left top, #370516, #630021, #900027, #bf0026, #eb121c)"
										}}
										
										onClick = {changeImg}
										>.</button>

										<button 
										className="cust_button"
										style = {{
											backgroundImage :"linear-gradient(to right bottom, #3250de, #2e4ac9, #2a43b4, #273c9f, #24368b)"
										}}
										type = "radio"
										value = "blue"
										name = "ext_color"
										onClick = {changeImg}
										>.</button>

										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #222223, #222224, #222225, #212226, #212227)"
										}}
										type = "radio"
										name = "ext_color"
										value = "sortablack"
										onClick = {changeImg}
										>.</button>

										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #070707, #171718, #242425, #303133, #3d3e42)"
											
										}}
										type = "radio"
										name = "ext_color"
										value = "black"
										onClick = {changeImg}
										>.</button>

										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #ffffff, #ededee, #dbdbdd, #c9c9cc, #b7b8bc)"
										}}
										type = "radio"
										value = "white"
										name = "ext_color"
										onClick = {changeImg}
										>.</button>

									</span>
									<h6>{color}</h6>
								</div>
								<hr/>
								<div className="cust_tab">
									<h2>Wheels</h2>
									<span>
									<button
										type = "radio"
										name = "wheels"
										value = "18wheels"
										className = "wheel1"
										onClick = {changewheel}
									>										
											<img className = "wheelimg" src = "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-18-aero.png?&version=v0028d202101150450" alt="aero-wheels-18" />
										
									</button>
									<button
										type = "radio"
										name = "wheels"
										value = "19wheels"
										className = "wheel1"
										onClick = {changewheel}
									>										
											<img className = "wheelimg" alt = "wheels 19" src = "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-19-sport.png?&version=v0028d202101150450" />
										
									</button>
									

										
									</span>
									<h6>{wheel}</h6>
								</div>
							</div>

						</div>

					</div>					
					
				</div>

					
				</Tab>
				<Tab eventKey="Interior" title="Interior" className="tab">
				<div class="container m-2 col-xl-12">
					<div className="row cust_row" >
						<div className="col-xl-9">
							<img className = "cust_img" 
							src = {img}
							 />

						</div>
						<div className = "col-xl-3">
							<div className= "column">
								<div className = "cust_tab">
									<h2>
										Interior color variant
									</h2>
									<span>
										
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #222223, #222224, #222225, #212226, #212227)"
										}}
										name = "intblack"
										onClick = {changeImg}
										>.</button>
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #ffffff, #ededee, #dbdbdd, #c9c9cc, #b7b8bc)"
										}}
										name = "intwhite"
										onClick = {changeImg}
										>.</button>

									</span>
									<h6>{color}</h6>
								</div>
								<hr/>
								<div className="cust_tab">
								
									
										
										<input type = "checkbox" value = "Dolby"/>
										<label style = {{fontSize : "25px"}}> &nbsp;  Dolby surround Speaker</label>
									
										<h6>7.1 surround system from Bose with Dolby Atmos Music  with immersive sound and noise cancellation.</h6>
										

								</div>
								<hr/>
								
								<div className="cust_tab">
										
										<input type = "checkbox" value = "USB"/>
										<label style = {{fontSize : "25px"}}> &nbsp;  Charging Dock</label>
										<h6>Additional dock which consists of 2 type C and a wireless Qi charge with fast charge of 18W for rear passenger on top of 4 usb ports and wirless charger for front deck.</h6>
										

								</div>
							</div>

						</div>

					</div>					
					<div style = {{
						marginBottom : "30px" ,
						marginTop : "30px" , 
						padding : '15px' ,
					}}>
						<hr/>
					</div>
				</div>
				</Tab>
				<Tab eventKey="Performance" title="Performance" className="tab">
				<div class="container m-2 col-xl-12">
					<div className="row cust_row" >
						<div className="col-xl-9">
							<img className = "cust_img" 
							src = {img}
							 />
							 

						</div>
						<div className = "col-xl-3">
							<div className= "column">
								<div className = "cust_tab">
									<h2>
										Engine Configurations
									</h2>
								</div>
								<hr/>
								<div className= "row mt-5" style ={{
									backgroundColor : '#ffffff'
								}}>
									<div className="col-4 text-center">
										<h2>
											<CountUp 
											start = {0}
											end = {mil}
											duration = {1.2}
										/> mi</h2>
										<h5>Range</h5>
									</div>
									<div className="col-4 text-center">
										<h2><CountUp 
											start = {0}
											end = {topSpeed}
											duration = {1.2}
										/><h5>mph</h5></h2>
										<h5>Top Speed</h5>
									</div>
									<div className="col-4 text-center">
										<h2><CountUp 
											start = {0}
											end = {acc}
											duration = {1.2}
											decimals = {2}
										/>  s</h2>
										<h5>0-60 mph</h5>
									</div>
								</div>
								<div className = "rangeButton mt-4">
								<input type = "button" 
									className={ (range==="Standard")? "perfButtonSelected col-12" : "perfButton col-12 "} 
									name="range" 
									value="Standard" 
									onClick = {changeRange}
									/>	

								</div>
								<div className = "rangeButton">
								<input type = "button" 
									className={ (range==="Performance")? "perfButtonSelected col-12" : "perfButton col-12 "} 
									name="range" 
									value="Performance"  
									onClick = {changeRange}
									/>
								
								</div>
								<div className = "rangeButton">
								<input type = "button" 
									className={ (range==="Long Range")? "perfButtonSelected col-12" : "perfButton col-12 "} 
									name="range" 
									value="Long Range"  
									onClick = {changeRange}
									/>
								
								</div>
								
							</div>

						</div>

					</div>					
					<div style ={{
						marginTop : "25px" ,
						marginBottom : "25px"
					}}>
						<hr />
					</div>
				</div>
				</Tab>
				<Tab eventKey="Accessories" title="Accessories" className="tab">
					<p>Mt bing</p>
				</Tab>
				<Tab eventKey="Add-ons" title="Add-ons" className="tab">
					<p>Mt bing</p>
				</Tab>
			</Tabs>
			<SumTotal />
			</form>
        </div>
    )
}

export default Customise;

