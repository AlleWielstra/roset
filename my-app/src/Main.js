import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from "./Home";
import Contact from "./Contact";
import Roomijs from "./Roomijs";
import Sorbetijs from "./Sorbetijs";
import About from "./About";
import NavbarToggle from "./NavbarToggle";
class Main extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }


    toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <ul className="header">
                        <li className="store-name">De Roset</li>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li>
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="stripped" caret >
                                    <b>soorten ijs</b>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem ><NavLink className="normalize-text" to="/Roomijs">Roomijs</NavLink></DropdownItem>
                                    <DropdownItem ><NavLink className="normalize-text" to="/Sorbetijs">Sorbetijs</NavLink></DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </li>
                        <li><NavLink to="/about">over ons</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <NavbarToggle/>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Sorbetijs" component={Sorbetijs}/>
                        <Route path="/Roomijs" component={Roomijs}/>
                        <Route path="/about" component={About}/>
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