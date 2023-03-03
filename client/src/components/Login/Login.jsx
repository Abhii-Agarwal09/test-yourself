import './Login.css';
import logo from '../../assets/register-logo.svg';
import { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setLoginFormData({
      email: '',
      password: '',
    });
  };

  const updateLoginFormData = (e) => {
    setLoginFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  // const registerFormSubmitHandler = (e) => {
  // 	e.preventDefault();
  // 	// localStorage.setItem('isLoggedIn', true);
  // 	setRegisterFormData({
  // 		name: '',
  // 		email: '',
  // 		password: '',
  // 	});
  // 	setIsLoggedIn(true);
  // };

  return (
    <>
      <div className="login-container">
        <div className="login-logo-container">
          <img className="login-logo" src={logo} alt="" />
          <p className="login-txt">Login</p>
        </div>
        <div className="form-container">
          <form
            onSubmit={loginFormSubmitHandler}
            action=""
            className="login-form"
          >
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="Email ID"
              value={loginFormData.email}
              onChange={updateLoginFormData}
            />
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={updateLoginFormData}
            />
            <button className="login-btn submit-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
