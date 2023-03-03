import logo from '../../assets/register-logo.svg';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// user k register ka data backend pe jayega and
// res aayega usko local storage pe save karo using
//

function Register({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerFormSubmitHandler = async (e) => {
    e.preventDefault();
    // localStorage.setItem('isLoggedIn', true);
    const res = await axios.post(
      'http://localhost:3001/register',
      registerFormData
    );
    console.log(res);
    if (res.data.success === true) {
      setIsLoggedIn(true);
      setRegisterFormData({
        name: '',
        email: '',
        password: '',
      });
      navigate('/test/colorblindness');
    } else {
      alert(res.data.message);
      setRegisterFormData({
        name: '',
        email: '',
        password: '',
      });
    }
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
      <div className="register-container">
        <div className="register-logo-container">
          <img className="register-logo" src={logo} alt="" />
          <p className="register-txt">Register</p>
        </div>
        <div className="form-container">
          <form
            onSubmit={registerFormSubmitHandler}
            action=""
            className="register-form"
          >
            <input
              type="text"
              name="name"
              id="register-name"
              placeholder="Name"
              value={registerFormData.name}
              onChange={updateRegisterFormData}
            />
            <input
              type="email"
              name="email"
              id="register-email"
              placeholder="Email ID"
              value={registerFormData.email}
              onChange={updateRegisterFormData}
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={registerFormData.password}
              onChange={updateRegisterFormData}
            />
            <button className="register-btn submit-btn">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
