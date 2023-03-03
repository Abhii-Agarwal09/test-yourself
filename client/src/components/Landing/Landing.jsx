import logo from '../../assets//landing-logo.svg';
import './Landing.css';
function Landing() {
  return (
    <>
      <div className="description-container">
        <div className="description-logo-container">
          <img src={logo} />
        </div>
        <h1 className="description-heading">Test Yourself</h1>
        <p className="description">
          This app has been created to assist individuals who are color blind in
          taking a test and adjusting the theme accordingly. Upon accessing the
          website, the user has the option to take a test based on a specific
          topic after configuring the necessary settings. Our goal is to create
          a function that permits users to manage the website using voice
          commands. Additionally, we will use webcam access to ensure the
          validity of the test.
        </p>
      </div>
      <div className="made-by-container">
        <p className="made-by-heading">Made by:</p>
        <div className="names">
          <ul className="names-list">
            <li className="name">
              <a href="https://github.com/SamriddhiTayal">Samriddhi Tayal</a>
            </li>
            <li className="name">
              <a href="https://github.com/Abhii-Agarwal09">Abhishek Agarwal</a>
            </li>
            <li className="name">
              <a href="https://github.com/priyanka-111-droid">
                Priyanka Govindarajan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Landing;
