import React, {Component} from 'react';
import './App.css'

class SecondHeader extends Component {
	render(){
		return(
			<div className = "SecondHeader">
				<div className="DivContainer">
					<div className="Welcome">
						<h2>Welcome to Staples</h2>
					</div>
					<div className="CenterDiv">
							<a href="#" className="CenterDivText"><b>Want Free Next-Day delievery with NO MIN ?</b><br/>Join Staples Plus!Exclutions apply
							</a>
					</div>
					<div className="SignButton">
						<button className="Sign" title="Sign In">Sign In</button>
					    <button className="Create" title="Create account">Create account</button>
					</div>
				</div>
			</div>
		);
	}
}
export default SecondHeader;