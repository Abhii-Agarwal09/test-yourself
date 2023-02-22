import './App.css';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  return (
    <div className='App'>
      <Navbar isLoggedIn={isLoggedIn} />
      {/* <Landing /> */}
      {/* <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/register'
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes> */}
      {/* <Login setIsLoggedIn={setIsLoggedIn} /> */}
      {/* <Register setIsLoggedIn={setIsLoggedIn} /> */}
      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
