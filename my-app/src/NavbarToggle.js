import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
class NavbarToggle extends React.Component {
    constructor(props) {
        super(props);

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
    render() {
        return (
            <div>
                <Navbar className="mobile-nav" light>
                    <NavbarBrand href="/" className="mr-auto store-name">De roset</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem><NavLink className="normalize-text-nav" exact to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink className="normalize-text-nav" to="/about">over ons</NavLink></NavItem>
                            <NavItem><NavLink className="normalize-text-nav" to="/contact">Contact</NavLink></NavItem>
                            <NavItem><NavLink className="normalize-text-nav" to="/Roomijs">Roomijs</NavLink></NavItem>
                            <NavItem><NavLink className="normalize-text-nav" to="/Sorbetijs">Sorbetijs</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavbarToggle;

