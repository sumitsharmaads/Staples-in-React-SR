import React, { Component } from 'react';
import './App.css';

class Reorder extends Component{
	render(){
		return(
			<div className="Reorder">
				<div className ="Reorder-Icons">
				<i className="fa fa-refresh"></i>
				</div>
				<span className="TextValue">Account</span>
			</div>
		);
	}
}

export default Reorder;