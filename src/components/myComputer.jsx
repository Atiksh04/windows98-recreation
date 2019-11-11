import React from 'react'
import image1 from '../images/computer_explorer-5.png'
import image2 from '../images/close-icon.png'
import image3 from '../images/floppy_drive_3_5-0.png'
import image4 from '../images/hard_disk_drive_cool-3.png'
import image5 from '../images/cd_drive_purple-0.png'
import image6 from '../images/directory_business_calendar-2.png'
import image7 from '../images/directory_dial_up_networking_cool-3.png'
import image8 from '../images/directory_control_panel_cool-2.png'
import image9 from '../images/directory_closed_history-2.png'
export default class MyComputer extends React.Component{
	constructor(props){
		super(props)
		this.closebutton= this.closebutton.bind(this)
	}
	closebutton(){
		this.props.close('true')
	}
	render(){
		return(
			<div className="my_computer">
				<div className="my_computer_header text-left">
					<img src={image1} className="mr-1 myimg" height="15px"/>
					<span >My Computer</span>
					<button className="close_button" onClick={this.closebutton}><img src={image2} className="myimg" height="15px"/></button>
				</div>
				<div className="block_myComputer text-left">
				<span className="block_bb ml-1 mr-2"></span>
				<span className="mr-3">File</span>
				<span className="mr-3">Edit</span>
				<span className="mr-3">View</span>
				<span className="mr-3">Go</span>
				<span className="mr-3">Favorites</span>
				<span className="mr-3">Help</span>
				</div>
				<div className="block_myComputer text-left">
					<span className="block_bb ml-1 mr-2"></span>
					<span >Address</span>
					<span className="ml-3 white_area ">
					<img src={image1} height="17px" className="mr-1"/>
					My Computer</span>	
				</div>
				<div className="icon_view">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<img src={image1} className="pt-5 pb-2"/>
							<p className="text-dialog">My Computer</p>
						</div>
						<div className="col-lg-9 col-md-9 text-left mt-4 view">
						<div className="mb-5">
						<span className="mr-2 ">
							<img src={image3} className="mr-2"/>
							Floppy [A:]
						</span>
						<span className="mr-2">
							<img src={image4} className="mr-2"/>
							Drive [G:]
						</span>
						<span className="mr-2 mb-4">
							<img src={image5} className="mr-2"/>
							CD_Drive
						</span>
						</div>	
						<span className="asd mr-3 mt-4">
							<img src={image6} className="mr-2"/>
							Printer
						</span>	
						<span className="asd mr-3 mt-2">
							<img src={image7} className="mr-2"/>
							Control Panel
						</span>	
						<span className="asd  mt-2">
							<img src={image8} className="mr-2"/>
							Dial-Up 
						</span>	
						<div className="mt-5">
						<span className="asd mr-2 mt-2">
							<img src={image9} className="mr-2"/>
							Scheduled Task 
						</span>	
						</div>
						</div>
					</div>
				</div>
				<div className="block_myComputer1">

				</div>

			</div>
			)
	}
}