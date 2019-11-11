import React from 'react'
import BottomBar from './bottomBar'
import image1 from '../images/computer_explorer-5.png'
import image2 from '../images/directory_open_file_mydocs.png'
import image3 from '../images/recycle_bin_full_cool.png'
import image5 from '../images/notepad-2.png'
import image4 from '../images/cd_drive_purple-0.png'
import image6 from '../images/window_red_hilights.png'
import MyComputer from './myComputer.jsx'
import MyDocument from './myDocuments'
import RecycleBin from './recycleBin'
import Notepad from './notepad.jsx'
import Calculator from './calculator.jsx'
export default class Desktop extends React.Component{
	render(){
		return(
			<div className="desktop_background">
			<div className="row">
			<div className="icon_tray col-md-1 col-lg-1 ">
				<div>
					<button className="ic_button">
						<img src={image1} className="ic_img mt-2" height="30px"/>
						<p>My Computer</p>
					</button>
				</div>
				<div>
					<button className="ic_button">
						<img src={image2} className="ic_img mt-2" height="30px"/>
						<p>My Documets</p>
					</button>
				</div>
				<div>
					<button className="ic_button">
						<img src={image3} className="ic_img mt-2" height="30px"/>
						<p>Recycle Bin</p>
					</button>
				</div>
				<div>
					<button className="ic_button">
						<img src={image4} className="ic_img mt-2" height="30px"/>
						<p>Cd Drive</p>
					</button>
				</div>
				<div>
					<button className="ic_button">
						<img src={image5} className="ic_img mt-2" height="30px"/>
						<p>Notepad</p>
					</button>
				</div>
				<div>
					<button className="ic_button">
						<img src={image6} className="ic_img mt-2" height="30px"/>
						<p>Calculator</p>
				</button>
				</div>
			</div>
			<div className="col-md-11 co-lg-11">
			<MyComputer/>
			<MyDocument/>
			<RecycleBin/>
			<Notepad/>
			<Calculator/>
			</div>
			</div>






			<BottomBar/>
			</div>
			)
	}
}