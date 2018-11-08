import React, {Component} from 'react';
import './App.css';
import Site_selection from './Site_selection';
import Employee from './Employee';
import Store from './Store';
import Add from './Add'

class Global_header extends Component {
	render() {
		return (
			<div className= 'Global_header'>
			<Site_selection />
			<Employee />
			<Store />
			<Add />
			</div>
		);
	}
}

export default Global_header;