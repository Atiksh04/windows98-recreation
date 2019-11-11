import React from 'react'
import image1 from '../images/recycle_bin_full_cool.png'
import image2 from '../images/close-icon.png'
export default class ReacycleBin extends React.Component{
	constructor(props){
		super(props)
		this.closebutton= this.closebutton.bind(this)
	}
	closebutton(){
		this.props.close('true')
	}
	render(){
		return(
			<div className="recyclebin">
			<div className="my_computer_header text-left">
					<img src={image1} className="mr-1 myimg" height="15px" alt="asd1"/>
					<span >Recycle Bin</span>
					<button className="close_button" onClick={this.closebutton}><img src={image2} className="myimg" height="15px" alt="alt2"/></button>
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
					<img src={image1} height="17px" alt="alt" className="mr-1"/>
					Recycle Bin</span>	
				</div>
				<div className="icon_view">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<img src={image1} className="pt-5 pb-2" alt="alt"/>
							<p className="text-dialog">Recycle Bin</p>
						</div>
						<div className="col-lg-9 col-md-9 text-left mt-4 view text-center">
						<span className="mt-2 mr-4">Recycle Bin is empty.</span>
						
						</div>
					</div>
				</div>
				<div className="block_myComputer1">

				</div>
			</div>
			)
	}
}