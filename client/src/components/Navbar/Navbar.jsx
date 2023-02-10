import './navbar.css';
import logo from '../../assets/logo.svg';
// function Navbar({ name }) {
// 	return <div>Hello,{name}</div>;
// }
// export default Navbar;

function Navbar() {
	return (
		<>
			<div className='nav-container'>
				<div className='logo-container'>
					{/* image and name  */}
					<div className='img-container'>
						<img
							src={logo}
							alt=''
						/>
					</div>
					<p className='heading'>Test Yourself</p>
				</div>
				<div className='nav-btn-container'>
					{/* login,register,logout button */}
					<div className='login-btn-container'>
						<button className='login-btn btn'>Login</button>
						<button className='register-btn btn'>Register</button>
					</div>
					<div className='logout-btn-container'>
						<button className='logout-btn btn'>Logout</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default Navbar;
