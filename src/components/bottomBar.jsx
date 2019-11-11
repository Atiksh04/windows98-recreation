import React from 'react'
import logo from '../images/windows-4.png'
import image1 from '../images/desktop-3.png'
import image2 from '../images/url2-1.png'
import image3 from '../images/user_world-0.png'
import image4 from '../images/utopia_smiley.png'
import image5 from '../images/task-scheduler.png'
import image6 from '../images/audio-okay.png'
import image7 from '../images/shut_down_normal-2.png'
import image8 from '../images/users_key-2.png'
import image9 from '../images/windows_update_small-4.png'
import image10 from '../images/directory_favorites-0.png'
import image11 from '../images/directory_open_file_mydocs_2k-2.png'
import image13 from '../images/executable_gear-0.png'
import image14 from '../images/close-icon.png'
export default class BottomBar extends React.Component{
	constructor(props){
		super(props)
		this.hours=new Date().getHours()
		this.minutes= new Date().getMinutes()
		this.state={
			clicked:false,
			shutdown:false
		}
		this.startClicked = this.startClicked.bind(this)
		this.showshutDown = this.showshutDown.bind(this)
		this.terminate= this.terminate.bind(this)
	}

	startClicked(){
		this.setState({
			clicked:!this.state.clicked
		})
		
	}
	showshutDown(){
		this.setState({
		shutdown:!this.state.shutdown
		})
	}
	terminate(){
		this.props.callback('terminate')
	}
	render(){
		return(
			<div>
			{this.state.clicked ? 
			<div className="start_menu">
				<div className="row">
					<div className="col-lg-3 col-md-3 blueCol">
						<p className="text_start_menu">Windows 98</p>	
					</div>
					<div className="col-lg-9 col-md-9 text-left">
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image9} className="mr-2" height="40px"/>Update</button></div>
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image11} className="mr-2" height="40px"/>Documents</button></div>
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image10} className="mr-2" height="40px"/>Favourites</button></div>
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image11} className="mr-2" height="40px"/>Find</button></div>
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image13} className="mr-2" height="40px"/>Run</button></div>
						<div className="mb-3 mt-1"><button className="start_menu_button text-left"><img alt="" src={image8} className="mr-2" height="40px"/>Log Off</button></div>
						<div className=" mt-1"><button className="start_menu_button text-left" onClick={this.showshutDown}><img alt="" src={image7} className="mr-2" height="40px"/>ShutDown</button></div>
					</div>

				</div>
			</div>
			:
			<span></span>
			}
			{this.state.shutdown ? 
			<div className="shutdown">
				<div className="my_computer_header text-left">
					<span >Shut Down Windows</span>
					<button className="close_button" onClick={this.showshutDown}><img alt="" src={image14} className="myimg" height="15px"/></button>
				</div>
				<div>
					<p className="mt-5">Do you want to Shut Down?</p>
					<button className="shutdown_button mr-4" onClick={this.terminate}>Yes</button>
					<button className="shutdown_button" onClick={this.showshutDown}>No</button>
				</div>
			</div>
			:
			<span></span> 
		}
			<div className="bottom_bar">
			<button className="start_button" onClick={this.startClicked}>
				<img alt="" src={logo} className="mr-1"/>
				Start
			</button>
			<span className="inset_line"></span>
			<span className="block_bb mr-1"></span>
			<img alt="" className="mr-1" src={image1}/>
			<img alt="" className="mr-1" src={image2}/>
			<img alt="" className="mr-1" src={image3}/>
			<img alt="" className="mr-1" src={image4}/>
			<span className="block_bb mr-1"></span>
			<span className="inset_line"></span>

			{this.props.open==='none' ? <span></span> 
			:
			<span className="pl-3 pr-3 open_window">{this.props.open}</span>
			}



			<span className="time_clock pr-1">
			<img alt="" src={image5} className="mr-1 ml-1"/>
			<img alt="" src={image6} className="mr-1"/>
			{this.hours}:{this.minutes}
			</span>
			</div>
			</div>
			)
	}
}