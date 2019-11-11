import React from 'react'
import BottomBar from './bottomBar'
import image1 from '../images/computer_explorer-5.png'
import image2 from '../images/directory_open_file_mydocs.png'
import image3 from '../images/recycle_bin_full_cool.png'
import image5 from '../images/notepad-2.png'
import image4 from '../images/git1.png'
import image6 from '../images/window_red_hilights.png'
import MyComputer from './myComputer.jsx'
import MyDocument from './myDocuments'
import RecycleBin from './recycleBin'
import Notepad from './notepad.jsx'
import Calculator from './calculator.jsx'
export default class Desktop extends React.Component{
	constructor(props){
		super(props)
		this.state={
			showComponent:'none'
		}
		this.componentClicked=this.componentClicked.bind(this)
		this.childCallback= this.childCallback.bind(this)
		this.open='none'
		this.terminate = this.terminate.bind(this)
	}
	componentClicked(value){
		console.log(value)
		this.open=value
		this.setState({
			showComponent:value
		})
		
	}
	terminate(value){
		this.props.shutdown('true')
		console.log('vakue in desktop',value)
	}
	childCallback(value){
		console.log('value inside P',value)
		this.open='none'
		this.setState({
			showComponent:'none'
		})
		
	}
	render(){
		return(
			<div className="desktop_background">
			<div className="row">
			<div className="icon_tray col-md-1 col-lg-1 ">
				<div>
					<button className="ic_button" onClick={()=>this.componentClicked('My Computer')} >
						<img alt="" src={image1} className="ic_img mt-2" height="30px"/>
						<p>My Computer</p>
					</button>
				</div>
				<div>
					<button className="ic_button" onClick={()=>this.componentClicked('My Documents')}>
						<img alt="" src={image2} className="ic_img mt-2" height="30px"/>
						<p>My Documets</p>
					</button>
				</div>
				<div>
					<button className="ic_button" onClick={()=>this.componentClicked('Recycle Bin')}>
						<img alt="" src={image3} className="ic_img mt-2" height="30px"/>
						<p>Recycle Bin</p>
					</button>
				</div>
				
				<div>
					<button className="ic_button" onClick={()=>this.componentClicked('Notepad')}>
						<img alt="" src={image5} className="ic_img mt-2" height="30px"/>
						<p>Notepad</p>
					</button>
				</div>
				<div>
					<button className="ic_button" onClick={()=>this.componentClicked('Calculator')}>
						<img alt="" src={image6} className="ic_img mt-2" height="30px"/>
						<p>Calculator</p>
				</button>
				</div>
				<div>
					<a className="ic_button" href="https://github.com/Atiksh04/windows98-recreation">
						<img alt="" src={image4} className="ic_img mt-2" height="30px"/>
						<p className="text-white">Git Repo</p>
					</a>
				</div>
			</div>
			<div className="col-md-11 co-lg-11">
			{this.state.showComponent==='My Computer' ? <MyComputer close= {this.childCallback}/>
				:
				this.state.showComponent==='My Documents' ? <MyDocument close={this.childCallback}/>
				:
				this.state.showComponent==='Recycle Bin' ? <RecycleBin close={this.childCallback}/>
				:
				this.state.showComponent==='Notepad' ? <Notepad close={this.childCallback}/>
				:
				this.state.showComponent==='Calculator' ? <Calculator close={this.childCallback}/>
				: 
				<span></span>

			}
			</div>
			</div>
			<BottomBar open={this.open} callback={this.terminate}/>
			</div>
			)
	}
}