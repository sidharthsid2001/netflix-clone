// Account.js
import React, { useState } from 'react';
import './Account.css'; 
import NavBar from '../Components/NavBar/NavBar';
import Footer from './Footer';

const Account = () => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: 'YourUsername',
    email: 'you@example.com',
    location: 'City, Country',
    birthdate: 'January 1, 1990',
  });

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <>
      <NavBar />
      <div className="account-page">
        <div className="user-details">
          <img
            src="https://placekitten.com/150/150" 
            alt="Profile"
            className="profile-image"
          />
          <div className="user-info">
            <h2 className="username">{userData.username}</h2>
            <p className="email">{userData.email}</p>
            <p className="location">{userData.location}</p>
            <p className="birthdate">Birthdate: {userData.birthdate}</p>
            {editing ? (
              <button className="save-profile-button" onClick={handleEditClick}>
                Save Changes
              </button>
            ) : (
              <button className="edit-profile-button" onClick={handleEditClick}>
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="playlist">
          <h3>My Playlist</h3>
          <ul>
            <li>Movie 1</li>
            <li>Show 1</li>
            <li>Documentary 1</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Account;
