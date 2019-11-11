import React from 'react'
import logo from '../images/windows-4.png'
import image1 from '../images/desktop-3.png'
import image2 from '../images/url2-1.png'
import image3 from '../images/user_world-0.png'
import image4 from '../images/utopia_smiley.png'
import image5 from '../images/task-scheduler.png'
import image6 from '../images/audio-okay.png'
export default class BottomBar extends React.Component{
	constructor(props){
		super()
		this.hours=new Date().getHours()
		this.minutes= new Date().getMinutes()
		
	}
	render(){
		return(
			<div className="bottom_bar">
			<button className="start_button">
				<img src={logo} className="mr-1"/>
				Start
			</button>
			<span className="inset_line"></span>
			<span className="block_bb mr-1"></span>
			<img className="mr-1" src={image1}/>
			<img className="mr-1" src={image2}/>
			<img className="mr-1" src={image3}/>
			<img className="mr-1" src={image4}/>
			<span className="block_bb mr-1"></span>
			<span className="inset_line"></span>


			<span className="time_clock pr-1">
			<img src={image5} className="mr-1 ml-1"/>
			<img src={image6} className="mr-1"/>
			{this.hours}:{this.minutes}
			</span>
			</div>
			)
	}
}