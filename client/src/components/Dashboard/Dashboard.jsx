import React, { useState } from 'react';
import QuizProgress from './QuizProgress';
import QuizStart from './QuizStart';
import Sidebar from './Sidebar';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('quiz');

  const activeTabChangeHandler = (e) => {
    setActiveTab(e.target.attributes['data-name'].nodeValue);
  };
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-avatar">
          <div className="sidebar-avatar-img">
            <img src="../src/images/Guy 1.png" alt="avatar image" />
          </div>
          <div className="sidebar-avatar-name">Joshua</div>
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
