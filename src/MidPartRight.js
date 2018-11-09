import React, {Component} from 'react';
import './App.css';


class MidPartRight extends Component {
	render(){
		return(
			<div className="MidPartRight" >
				<span className="MidPartRight_Text"><h2><a href="#">Hundreds of<br/>deals in Store</a></h2></span>
				<p className="MidPartRight_Text_Value"><a href="">Stop in this week to find<br/>extra Saving</a></p>
				<div className="View">
					<button className="View_Weekly">VIEW WEEKLY AD</button>
				</div>
			</div>
		);
	}
} 
export default MidPartRight;