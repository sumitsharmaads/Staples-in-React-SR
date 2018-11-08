import React, { Component } from 'react';
import './App.css'

class Site_selection extends Component {
	render() {
		return (
			<div className= 'Site_selection'>
				<div className="Sites">
					<a href="#"><span title="Staples Sites">Staples Sites</span></a>
					<i className="Down"></i>
				</div>
			</div>
		);
	}
}

export default Site_selection;