import React from 'react'
import image1 from '../images/window_red_hilights.png'
import image2 from '../images/close-icon.png'

export default class Calculator extends React.Component{
	constructor(props){
		super(props)
		this.closebutton= this.closebutton.bind(this)
	}
	closebutton(){
		this.props.close('true')
	}
	render(){
		return(
			<div className="calculator">
				<div className="my_computer_header text-left">
					<img alt="" src={image1} className="mr-1 myimg" height="15px"/>
					<span >Calculator</span>
					<button className="close_button" onClick={this.closebutton}><img alt="" src={image2} className="myimg" height="15px"/></button>
				</div>
				<div className="text-left">
					<span className="mr-3 ml-2">Edit</span>
					<span className="mr-3">View</span>
					<span className="mr-3">Help</span>
				</div>
				<div className=" text-right show ml-2 mr-2">
					<p>0</p>
				</div>
				<div className="wrap">
					<div className="button_cal mr-5 ml-1"></div>
					<div className="button_cal1 mr-4 ml-3 pl-3 pr-2">Backspace</div>
					<div className="button_cal mr-4 pl-1 pr-1">CE</div>
					<div className="button_cal mr-4 pl-1 pr-1">C</div>
				</div>
				<div className="wrap mt-3">
					<div className="button_cal mr-5  ml-0">MC</div>
					<div className="button_cal mr-2 pl-3 pr-2">7</div>
					<div className="button_cal mr-2 pl-1 pr-1">8</div>
					<div className="button_cal mr-2 pl-1 pr-1">9</div>
					<div className="button_cal mr-2 pl-1 pr-1">/</div>
					<div className="button_cal mr-2 pl-1 pr-1">sqrt</div>
				</div>
				<div className="wrap mt-2">
					<div className="button_cal mr-5  ml-0">MR</div>
					<div className="button_cal mr-2 pl-3 pr-2">4</div>
					<div className="button_cal mr-2 pl-1 pr-1">5</div>
					<div className="button_cal mr-2 pl-1 pr-1">6</div>
					<div className="button_cal mr-2 pl-1 pr-1">*</div>
					<div className="button_cal mr-2 pl-1 pr-1">%</div>
				</div>
				<div className="wrap mt-2">
					<div className="button_cal mr-5  ml-0">MR</div>
					<div className="button_cal mr-2 pl-3 pr-2">1</div>
					<div className="button_cal mr-2 pl-1 pr-1">2</div>
					<div className="button_cal mr-2 pl-1 pr-1">3</div>
					<div className="button_cal mr-2 pl-1 pr-1">-</div>
					<div className="button_cal mr-2 pl-1 pr-1">1/x</div>
				</div>
				<div className="wrap mt-2">
					<div className="button_cal mr-5  ml-0">M+</div>
					<div className="button_cal mr-2 pl-3 pr-2">0</div>
					<div className="button_cal mr-2 pl-1 pr-1">+/-</div>
					<div className="button_cal mr-2 pl-1 pr-1">+</div>
					<div className="button_cal mr-2 pl-1 pr-1">=</div>
					<div className="button_cal mr-2 pl-1 pr-1">sqrt</div>
				</div>
				
			</div>
			)
	}
}