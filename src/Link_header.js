import React, {Component} from 'react';
import './App.css';
import Search_bar from './Search_bar';
import MenuBar from './MenuBar'

class Link_header extends Component{
	render() {
		return(
			<div className='Link_header'>
				<a className='Staples_logo' href="https://www.staples.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Staples%2C_Inc._logo.svg/2000px-Staples%2C_Inc._logo.svg.png" width="125px" height="28px"/></a>
				<Search_bar />
				<MenuBar />
			</div>
		);
	}
} 

export default Link_header;