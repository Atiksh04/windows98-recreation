import React from 'react'
import image1 from '../images/notepad-2.png'
import image2 from '../images/close-icon.png'
export default class Notepad extends React.Component{
	render(){
		return(
			<div className="notepad">
			<div className="my_computer_header text-left">
					<img src={image1} className="mr-1 myimg" height="15px"/>
					<span >Notepad</span>
					<button className="close_button"><img src={image2} className="myimg" height="15px"/></button>
				</div>
				<div className="block_myComputer text-left">
				<span className="mr-3 ml-2">File</span>
				<span className="mr-3">Edit</span>
				<span className="mr-3">Search</span>
				<span className="mr-3">Help</span>
				</div>
				
				<div className="icon_view">
					<div className="textarea">
					<textarea rows="16" cols="73"></textarea>	
					</div>
				</div>
				<div className="block_myComputer1">
				</div>
			</div>
			)
	}
}