import { Link } from "react-router-dom";

export default function Navbar() {
	return(
		<nav>
			<h1><Link to="/" id="logo">GoodEats</Link></h1>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/menu">Menu</Link></li>
				<li><Link to="/order">Order</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</nav>
	);
}