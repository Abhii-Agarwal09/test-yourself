import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    setIsLoggedIn(false);
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('type');
    handleThemeChange('default');
    navigate('/');
  };

  return (
    <>
      <div className={`nav-container theme-${theme ? theme : 'default'}`}>
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
