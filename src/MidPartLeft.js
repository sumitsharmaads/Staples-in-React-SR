import React, {Component} from 'react';
import './App.css';


class MidPartLeft extends Component {
	render(){
		return(
			<div className="MidPartLeft">
				<span className="MidPartLeft_Text"> <h2><a href="#">Up To 40% Off</a></h2></span><br/>
				<p className="MidPartLeft_Text_Value">
					<a href="">Selected cold and flu supplies.<br/>
					Online only.
					</a>
					<div className="Shop">
						<button  className="Shop_Now">SHOP NOW</button>
					</div>
				</p>
			</div>
		);
	}
} 
export default MidPartLeft;