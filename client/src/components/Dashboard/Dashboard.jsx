import React, { useContext, useEffect, useState } from 'react';
import QuizProgress from './QuizProgress';
import QuizStart from './QuizStart';
import Sidebar from './Sidebar';
import { ThemeContext } from '../../context/ThemeContext';

function Dashboard() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('quiz');

  const activeTabChangeHandler = (e) => {
    setActiveTab(e.target.attributes['data-name'].nodeValue);
  };
  return (
    <div className={`dashboard-layout theme-${theme ? theme : 'default'}`}>
      <aside className="sidebar">
        <div className="sidebar-avatar">
          <div className="sidebar-avatar-img">
            <img src="../src/images/Guy 1.png" alt="avatar image" />
          </div>
          <div className="sidebar-avatar-name">
            {localStorage.getItem('username')}
          </div>
        </div>
        <div className="sidebar-profile">
          <p>Profile</p>
        </div>
        <div className="sidebar-colblind-test">
          <p data-name="colorblind" onClick={activeTabChangeHandler}>
            Colorblind test
          </p>
        </div>
        <div className="sidebar-attend-quiz">
          <p data-name="quiz" onClick={activeTabChangeHandler}>
            Attend Quiz
          </p>
        </div>
      </aside>
      {/* <Sidebar /> */}
      {/* <QuizProgress /> */}
      {activeTab === 'quiz' ? <QuizStart /> : <h1>Colorblindness test</h1>}
    </div>
  );
}
export default Dashboard;
