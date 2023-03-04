import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// function Navbar({ name }) {
// 	return <div>Hello,{name}</div>;
// }
// export default Navbar;

// useffect se chack karo is user logged h ki nhi
// getItem karke
// and store in isLoggedIn using state management

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  // useEffect(() => {
  // 	const loggedIn=localStorage.getItem('isLoggedIn');
  // 	console.log(loggedIn);
  // 	setIsLoggedIn(loggedIn);
  // },[]);

  // console.log(isLoggedIn);

  const logoutHandler = (e) => {
    setIsLoggedIn(false);
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('type');
    navigate('/');
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          {/* image and name  */}
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
          <p className="heading">
            <Link to="/">Test Yourself</Link>
          </p>
        </div>
        <div className="nav-btn-container">
          {/* login,register,logout button */}
          {!isLoggedIn ? (
            <div className="login-btn-container">
              <button className="login-btn btn">
                <Link to={'/login'}>Login</Link>
              </button>
              <button className="register-btn btn">
                <Link to={'/register'}>Register</Link>
              </button>
            </div>
          ) : (
            <div className="logout-btn-container">
              <button className="logout-btn btn" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Navbar;
