import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../assets/Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="content-container">
            {/* Profile content */}
            <h2>Profile</h2>
            <p>Customize your profile here.</p>
            {user && (
              <div>
                <p>Name: {user.displayName || 'N/A'}</p>
                <p>Email: {user.email || 'N/A'}</p>
                {/* Add more profile information as needed */}
              </div>
            )}
          </div>
        );
      case 'settings':
        return (
          <div className="content-container">
            {/* Settings content */}
            <h2>Settings</h2>
            <p>Manage your account settings here.</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="content-container">
            {/* Notifications content */}
            <h2>Notifications</h2>
            <p>View your recent notifications here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="header">
          <h1>Dashboard</h1>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
        <div className="welcome-card">
          <h2>Welcome to Your Dashboard</h2>
          <p>{user ? `Hello, ${user.displayName || 'User'}!` : 'Manage your profile, settings, and notifications here.'}</p>
        </div>
        <div className="tabs">
          <ul>
            <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</li>
            <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Settings</li>
            <li className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>Notifications</li>
          </ul>
        </div>
        <div className="content">
          {renderContent()}
        </div>
        <div className="homepage-button">
          <Link to="/" className="homepage-link">Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
