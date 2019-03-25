import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Ijs from "./Ijs";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li className="store-name">De Roset</li>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/ijs">Soorten ijs</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Ijs" component={Ijs}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                    <ul className="footer">
                        <li>De Roset voor premium ijs</li>
                    </ul>
                </div>
            </HashRouter>
        );
    }
}

export default Main;