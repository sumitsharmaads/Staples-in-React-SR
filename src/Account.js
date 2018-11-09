import React, { Component } from 'react';
import './App.css';

class Account extends Component{
	render(){
		return(
			<div className="Account">
				<div className ="Reorder-Icons">
					<i className="fa fa-user-o"></i>
				</div>
				<span className="TextValue">Account</span>
			</div>
		);
	}
}

export default Account;
