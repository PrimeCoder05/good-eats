import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="wrapper">
				<div className="hero" style={{ backgroundImage: `url(./main-background.jpg)` }}>
					<h2>GoodEats</h2>
					<p><em>"Fast food done right"</em></p>
				</div>
				<main>
					<div>
						<h3>Be sure to check out our menu:</h3>
						<Link to="/menu">Go to menu {'>'}</Link>
					</div>
					<div>
						<h3>Read about us and what we are about:</h3>
						<Link to="/about">About us {'>'}</Link>
					</div>
					<div>
						<h3>Contact us for feedback, delivery or a question:</h3>
						<Link to="/contact">Contact Us {'>'}</Link>
					</div>
				</main>
			</div>
		</>
	);
}