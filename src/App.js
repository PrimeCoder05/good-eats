import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Menu from './Menu';
import Contact from './Contact';

function App() {
	return (
		<>
			{<Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{<Footer />}
		</>
	);
}

export default App;