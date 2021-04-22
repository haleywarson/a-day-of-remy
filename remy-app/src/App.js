import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./index.css"

import Home from './Components/Home';
import About from "./Components/About";
import Friends from "./Components/Friends";

export default function App() {

    return (
        <Router>
          <div className="nav">
            <header>
              <ul className="nav-list">
                <li className="nav-links">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                  <Link to="/about">About Remy</Link>
                </li>
                <li className="nav-links">
                  <Link to="/friends">Remy's Friends</Link>
                </li>
              </ul>
            </header>
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/friends">
                  <Friends />
                </Route>
              </Switch>
            </main>
        </div>
        </Router>
    );
}
