import React from 'react';

function Sidebar() {
  return (
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
        <p>Colorblind test</p>
      </div>
      <div className="sidebar-attend-quiz">
        <p>Attend Quiz</p>
      </div>
    </aside>
  );
}

export default Sidebar;
