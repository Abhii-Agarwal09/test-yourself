import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Landing />
			{/* <Login/> */}
			{/* <Register /> */}
			<Footer />
		</div>
	);
}

export default App;
