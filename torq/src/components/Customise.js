import React , {useState} from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import './Customise.css';

function Customise() {
	const [img , setImg] = useState('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PMNG,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
	const [color , setColor] = useState('Red Multicoat');
	
	const changewheel = (e) => {
		console.log(e)
		if(e.target.value)
		{

		}

	}
	const changeImg = (e) => {
		console.log(e);
		if(e.target.name==="red")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPMR,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Red Multicoat');
			console.log('red')
		}
		if(e.target.name==="blue")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPSB,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Deep Blue Metallic')
			console.log('blue')
		}
		if(e.target.name==="white")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PPSW,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Pearl White Multicoat');
		}
		if(e.target.name==="black")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PBSB,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
			setColor('Midnight Silver Multicoat')
		}
		if(e.target.name==="sortablack")
		{
			setImg('https://static-assets.tesla.com/configurator/compositor?&options=$MT315,$PMNG,$W41B,$IPB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202101071122&crop=0,0,0,0&version=v0028d202101071122');
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

	var name= " ";
    return (
        <div className="col-12">
            <Tabs defaultActiveKey="Exterior" id="uncontrolled-tab-example">
				<Tab eventKey="Exterior" title="Exterior" className="tab">
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
										Colors
									</h2>
									<span>
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to left top, #370516, #630021, #900027, #bf0026, #eb121c)"
										}}
										name = "red"
										onClick = {changeImg}
										>.</button>
										<button 
										className="cust_button"
										style = {{
											backgroundImage :"linear-gradient(to right bottom, #3250de, #2e4ac9, #2a43b4, #273c9f, #24368b)"
										}}
										name = "blue"
										onClick = {changeImg}
										>.</button>
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #070707, #171718, #242425, #303133, #3d3e42)"
										}}
										name = "sortablack"
										onClick = {changeImg}
										>.</button>
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #222223, #222224, #222225, #212226, #212227)"
										}}
										name = "black"
										onClick = {changeImg}
										>.</button>
										<button 
										className="cust_button"
										style = {{
											backgroundImage: "linear-gradient(to right bottom, #ffffff, #ededee, #dbdbdd, #c9c9cc, #b7b8bc)"
										}}
										name = "white"
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
										style = {{
											backgroundImage: "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-18-aero.png?&version=v0028d202101071122"
										}}
										name = "wheel1"
										onClick = {changeImg}
										>.</button>

									</span>
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
										Colors
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
									more colors
								</div>
							</div>

						</div>

					</div>					

				</div>
				</Tab>
				<Tab eventKey="Performance" title="Performance" className="tab">
					<p>Mt bing</p>
				</Tab>
				<Tab eventKey="Accessories" title="Accessories" className="tab">
					<p>Mt bing</p>
				</Tab>
				<Tab eventKey="Add-ons" title="Add-ons" className="tab">
					<p>Mt bing</p>
				</Tab>
			</Tabs>
        </div>
    )
}

export default Customise;

