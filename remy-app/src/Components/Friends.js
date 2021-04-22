import React from 'react'

import "../App.css";
import "../index.css";

export default function Friends() {
    return (
        <div className="friends-container">
                <ul className="friend-list">
                        <li className="friend-card">Friend 1</li>
                        <img alt="Friend 1" src="" />
                        <li className="friend-card">Friend 2</li>
                        <img alt="Friend 2" src="" />
                        <li className="friend-card">Friend 3</li>
                        <img alt="Friend 3" src="" />
                </ul>
        </div>
    );
}
