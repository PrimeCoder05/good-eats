import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

function App() {
	return (
		<>
			{<Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" />
				<Route path="/order" />
				<Route path="/about" />
			</Routes>
			{<Footer />}
		</>
	);
}

export default App;