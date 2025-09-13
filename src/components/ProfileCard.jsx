import React from "react";
import "./ProfileCard.css";
import avatar from '../assets/avatar.jpg'

export default function ProfileCard({
  name = "Zelalem",
  title = "Web Developer",
  handle = "yourhandle",
  status = "Online",
  contactText = "Contact",
  avatarUrl = avatar,
  onContactClick = () => {},
}) {
  return (
    <div className="pc-card-wrapper">
      <section className="pc-card">
        <div className="pc-inside">
          <div className="pc-content pc-avatar-content">
            <img className="avatar" src={avatarUrl} alt={name} loading="lazy" />
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-mini-avatar">
                  <img src={avatarUrl} alt={`${name} small`} />
                </div>
                <div className="pc-user-text">
                  <div className="pc-handle">@{handle}</div>
                  <div className="pc-status">{status}</div>
                </div>
              </div>
              <button className="pc-contact-btn" onClick={onContactClick}>
                {contactText}
              </button>
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
