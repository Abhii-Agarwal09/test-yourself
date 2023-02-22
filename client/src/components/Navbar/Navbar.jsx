import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
// function Navbar({ name }) {
// 	return <div>Hello,{name}</div>;
// }
// export default Navbar;

// useffect se chack karo is user logged h ki nhi
// getItem karke
// and store in isLoggedIn using state management

function Navbar({ isLoggedIn }) {
	// useEffect(() => {
	// 	const loggedIn=localStorage.getItem('isLoggedIn');
	// 	console.log(loggedIn);
	// 	setIsLoggedIn(loggedIn);
	// },[]);

	// console.log(isLoggedIn);

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
					{!isLoggedIn ? (
						<div className='login-btn-container'>
							<button className='login-btn btn'>Login</button>
							<button className='register-btn btn'>Register</button>
						</div>
					) : (
						<div className='logout-btn-container'>
							<button className='logout-btn btn'>Logout</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
export default Navbar;
