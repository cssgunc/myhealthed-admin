import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import classNames from 'classnames';

import { 
    Nav,
    DropdownToggle,
    NavLink,
    UncontrolledDropdown,
    NavItem,
    DropdownMenu,
    DropdownItem,
    NestedDropdown
} from './../../../components';

const NavbarNavigation = ({ accent, pills, ...navbarProps }) => (
    <Nav navbar accent={ accent } pills={ pills } { ...navbarProps }>
        <NavItem>
            <NavLink tag={ Link } to="/interface/navbars">
                <span className={ classNames({ 'mr-3': !(pills || accent) }) }>
                    <i className="fa fa-fw fa-home d-none d-md-inline"></i>
                    <span className="d-md-none">
                        Home
                    </span>
                </span>
            </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
                Dashboards
                <i className="fa fa-angle-down fa-fw ml-1"></i>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem tag={ Link } to="/dashboards/projects">Projects</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
                Layouts                                 
                <i className="fa fa-angle-down fa-fw ml-1"></i>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem tag={ Link } to="/layouts/navbar">Navbar</DropdownItem>
                <DropdownItem tag={ Link } to="/layouts/sidebar">Sidebar</DropdownItem>
                <DropdownItem tag={ Link } to="/layouts/sidebar-with-navbar">Sidebar with Navbar</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
                <i className="fa fa-ellipsis-h fa-fw"></i>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem divider />
                <DropdownItem header>Layouts</DropdownItem>
                <DropdownItem tag={ Link } to="/layouts/navbar-only">Navbar Only</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Other</DropdownItem>
                <DropdownItem tag={ Link } to="/tables/tables">Tables</DropdownItem>
                <DropdownItem tag={ Link } to="/graphs/re-charts">Re Charts</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
);
NavbarNavigation.propTypes = {
    pills: PropTypes.bool,
    accent: PropTypes.bool,
};


export { NavbarNavigation };
