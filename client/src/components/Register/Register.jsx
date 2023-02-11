import logo from '../../assets/register-logo.svg';
import './Register.css'

function Register() {
	return (
		<>
			<div className='register-container'>
				<div className='register-logo-container'>
					<img className='register-logo'
						src={logo}
						alt=''
					/>
					<p className='register-txt'>Register</p>
				</div>
				<div className='form-container'>
					<form
						action=''
						className='register-form'>
						<input
							type='text'
							name='name'
							id='register-name'
							placeholder='Name'
						/>
						<input
							type='email'
							name='email'
							id='register-email'
							placeholder='Email ID'
						/>
						<input
							type='password'
							name='password'
							id='register-password'
							placeholder='Password'
						/>
						<button className='register-btn submit-btn'>Register</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
