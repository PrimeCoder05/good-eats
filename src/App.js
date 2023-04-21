import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
	return (
		<>
			{<Navbar />}
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" />
					<Route path="/order" />
					<Route path="/about" />
				</Routes>
			</div>
		</>
	);
}

export default App;