import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
function App() {
	const clickHandler = (ev) => {
		console.log(ev.target.innerText);
	};
	return (
		<div className='App'>
			<Navbar/>
			<Footer />
		</div>
	);
}

export default App;
