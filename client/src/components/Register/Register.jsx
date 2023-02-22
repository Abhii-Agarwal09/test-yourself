import logo from '../../assets/register-logo.svg';
import './Register.css';
import { useState } from 'react';

// user k register ka data backend pe jayega and
// res aayega usko local storage pe save karo using
//

function Register({ setIsLoggedIn }) {
	const [registerFormData, setRegisterFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const registerFormSubmitHandler = (e) => {
		e.preventDefault();
		// localStorage.setItem('isLoggedIn', true);
		setRegisterFormData({
			name: '',
			email: '',
			password: '',
		});
		setIsLoggedIn(true);
	};

	const updateRegisterFormData = (e) => {
		setRegisterFormData((prevState) => {
			// console.log(e);
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
		// console.log(e);
	};
	// console.log(registerFormData);

	return (
		<>
			<div className='register-container'>
				<div className='register-logo-container'>
					<img
						className='register-logo'
						src={logo}
						alt=''
					/>
					<p className='register-txt'>Register</p>
				</div>
				<div className='form-container'>
					<form
						onSubmit={registerFormSubmitHandler}
						action=''
						className='register-form'>
						<input
							type='text'
							name='name'
							id='register-name'
							placeholder='Name'
							value={registerFormData.name}
							onChange={updateRegisterFormData}
						/>
						<input
							type='email'
							name='email'
							id='register-email'
							placeholder='Email ID'
							value={registerFormData.email}
							onChange={updateRegisterFormData}
						/>
						<input
							type='password'
							name='password'
							id='register-password'
							placeholder='Password'
							value={registerFormData.password}
							onChange={updateRegisterFormData}
						/>
						<button className='register-btn submit-btn'>Register</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
