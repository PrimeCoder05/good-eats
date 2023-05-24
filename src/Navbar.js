import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		return (
			<nav>
				<h1><Link to="/" id="logo">GoodEats</Link></h1>
				<ul id="navbar" className={this.state.clicked ? "#navbar clicked" : "#navbar"}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/menu">Menu</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>

				<div className="mobile" onClick={this.handleClick}>
					<img src="./icons-menu.png" alt="Other Links" width={25} />
				</div>
			</nav>
		);
	}
}