import React from "react";
import './Card.css';

const Card = ({ profile }) => {
  return (
    <div className="profile">
      <img src={profile.avatar_url} alt="Profile" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};

export default Card;
