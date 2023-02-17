import "./Login.css";
import logo from "../../assets/register-logo.svg";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-logo-container">
          <img className="login-logo" src={logo} alt="" />
          <p className="login-txt">Login</p>
        </div>
        <div className="form-container">
          <form action="" className="login-form">
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="Email ID"
            />
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
            />
            <button className="login-btn submit-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
