import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="wrapper">
				<div className="intro" style={{ backgroundImage: `url(./main-background.jpg)` }}>
					<h2>GoodEats</h2>
					<p><em>"Fast food done right"</em></p>
				</div>
				<main>
					<div>
						<h3>Be sure to check out our menu:</h3>
						<Link to="/menu">Go to menu {'>'}</Link>
					</div>
					<div>
						<h3>Order you food for delivery or pick up:</h3>
						<Link to="/order">Order online {'>'}</Link>
					</div>
					<div>
						<h3>Read about us and what we are about:</h3>
						<Link to="/about">About us {'>'}</Link>
					</div>
				</main>
			</div>
		</>
	);
}