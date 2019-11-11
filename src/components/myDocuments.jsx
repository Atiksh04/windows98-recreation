import React from 'react'
import image1 from '../images/directory_open_file_mydocs.png'
import image2 from '../images/close-icon.png'
import image3 from '../images/directory_closed-4.png'
import image4 from '../images/directory_open_file_mydocs_2k-2.png'
export default class MyDocument extends React.Component{
	constructor(props){
		super(props)
		this.closebutton= this.closebutton.bind(this)
	}
	closebutton(){
		this.props.close('true')
	}
	render(){
		return(
			<div className="my_document">
				<div className="my_computer_header text-left">
					<img src={image1} alt="" className="mr-1 myimg" height="15px"/>
					<span >My Documents</span>
					<button className="close_button" onClick={this.closebutton}><img alt="" src={image2} className="myimg" height="15px"/></button>
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
					<img src={image1} height="17px" alt="" className="mr-1"/>
					My Documents</span>	
				</div>
				<div className="icon_view">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<img alt="" src={image1} className="pt-5 pb-2"/>
							<p className="text-dialog">My Documents</p>
						</div>
						<div className="col-lg-9 col-md-9 text-left mt-4 view">
						<span className="mt-2 mr-4"> <img alt="" src={image3}/> My Files</span>
						<span><img  alt="" src={image4} /> My Photos</span>
						</div>
					</div>
				</div>
				<div className="block_myComputer1">

				</div>
			</div>
			)
	}
}