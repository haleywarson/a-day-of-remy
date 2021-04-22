import React from 'react'

import "../App.css";
import "../index.css";

export default function Friends() {
    return (
      <div className="friends-container">
        <ul className="friends-list">
          <div className="friend-card-container">
            <li className="friend-card">
              Friend 1
              <img alt="Friend 1" src="" />
            </li>
          </div>

          <div className="friend-card-container">
            <li className="friend-card">
              Friend 2
              <img alt="Friend 2" src="" />
            </li>
          </div>

          <div className="friend-card-container">
            <li className="friend-card">
              Friend 3
              <img alt="Friend 3" src="" />
            </li>
          </div>
        </ul>
      </div>
    );
}
