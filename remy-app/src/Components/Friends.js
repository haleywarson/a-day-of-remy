import React from 'react'

import "../App.css";
import "../index.css";

import Footer from './Footer'

export default function Friends() {
    return (
        <>
            <div className="friends-container">
                <ul className="friends-list">
                    <div className="friend-card-container">
                        <li className="friend-card">
                        Alakazam Ahmed
                        <img
                            alt="Alakazam Ahmed"
                            src="https://www.towergateinsurance.co.uk/media/6287823/GettyImages-1169368098.jpg"
                        />
                        </li>
                    </div>
                    <div className="friend-card-container">
                        <li className="friend-card">
                        Dapper Damon
                        <img alt="Dapper Damon" src="https://i.imgur.com/QzroT4q.jpeg" />
                        </li>
                    </div>
                    <div className="friend-card-container">
                        <li className="friend-card">
                        Mellifluous Marc
                        <img
                            alt="Mellifluous Marc"
                            src="https://dustinabbott.net/wp-content/uploads/2014/03/53-Silver-Fox.jpg"
                        />
                        </li>
                    </div>
                    <div className="friend-card-container">
                        <li className="friend-card">
                        Awesome Andy
                        <img alt="Awesome Andy" src="https://i.imgur.com/QzroT4q.jpeg" />
                        </li>
                    </div>
                </ul>
            </div>
            <Footer />
        </>

    );
}
