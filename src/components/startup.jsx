import React from 'react'
import sound from '../images/win98.mp3'
export default class Startup extends React.Component{
	render(){
		return(
			<div className="startup_background">
			<audio >
				<source src={sound} type="audio/mpeg"/>
				Your browser does not support the audio tag.
			</audio>
			</div>
			)
	}
}