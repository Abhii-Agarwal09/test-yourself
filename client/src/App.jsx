import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useState } from 'react';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(null);
	return (
		<div className='App'>
			<Navbar isLoggedIn={isLoggedIn} />
			{/* <Landing /> */}
			<Login setIsLoggedIn={setIsLoggedIn}/>
			{/* <Register setIsLoggedIn={setIsLoggedIn} /> */}
			<Footer />
		</div>
	);
}
export default App;
