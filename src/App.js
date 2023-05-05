import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';

function App() {
	return (
		<>
			{<Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" />
				<Route path="/order" />
				<Route path="/about" element={<About />} />
			</Routes>
			{<Footer />}
		</>
	);
}

export default App;