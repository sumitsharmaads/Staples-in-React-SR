import React, { Component } from 'react';
import './App.css';

class Reorder extends Component{
	render(){
		return(
			<div className="Reorder">
				<div className ="Reorder-Icons">
					<i class="fa fa-refresh"></i>
				</div>
				<span className="TextValue">Reorder</span>
			</div>
		);
	}
}

export default Reorder;