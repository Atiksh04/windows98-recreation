import React from 'react'
import sound from '../images/Windows 98 Shutdown.mp3'
export default class Startup extends React.Component{
	render(){
		return(
			<div className="startup_background">

			<p className="lead">Windows is Ready to Shutdown.</p>
			<audio autoPlay>
				<source src={sound} type="audio/mpeg"/>
				Your browser does not support the audio tag.
			</audio>
			</div>
			)
	}
}