import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    id: 1,
    fname: "Muhammad",
    lname: "Raza",
    pas: "Raza@1234",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login-form">
      <div className="sign-body" id="container">
        <form action="#">
          <h1>Profile</h1>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={user.fname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={user.lname}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="pas"
            placeholder="Password"
            value={user.pas}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Re-Enter Password"
          />
          <Link to={`/users/dashboard`}>
            <button type="submit">Edit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Profile;
