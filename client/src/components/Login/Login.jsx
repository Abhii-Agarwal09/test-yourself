import './Login.css';
import logo from '../../assets/register-logo.svg';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

function Login({ setIsLoggedIn }) {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3001/login', loginFormData);
    console.log(res);
    if (res.data.success === true) {
      localStorage.setItem('username', res.data.data.name);
      localStorage.setItem('email', res.data.data.email);
      localStorage.setItem('type', res.data.data.colorBlindnessType);
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      setLoginFormData({
        email: '',
        password: '',
      });
      handleThemeChange(res.data.data.colorBlindnessType)
      navigate('/dashboard');
    } else {
      alert(res.data.message);
      setLoginFormData({
        email: '',
        password: '',
      });
    }
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
