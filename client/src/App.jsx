import './App.css';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ColQuestion from './components/ColorBlindTest/ColQuestion';
import ColorBlindnessTest from './components/ColorBlindTest/ColorblindnessTest';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus);
  }, []);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/test/colorblindness"
          element={<ColorBlindnessTest setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
      {/* <Login setIsLoggedIn={setIsLoggedIn} /> */}
      {/* <Register setIsLoggedIn={setIsLoggedIn} /> */}
      {/* <Dashboard /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
