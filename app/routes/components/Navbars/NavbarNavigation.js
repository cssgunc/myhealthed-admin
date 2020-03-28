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
                Interface
                <i className="fa fa-angle-down fa-fw ml-1"></i>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem tag={ Link } to="/interface/colors">Colors</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/typography">Typography</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/buttons">Buttons</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/paginations">Paginations</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/images">Images</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/avatars">Avatars</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/progressbars">Progress Bars</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/badgeslabels">Badges & Labels</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/mediaobjects">Media Objects</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/listgroups">List Groups</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/alerts">Alerts</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/accordions">Accordions</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/tabspills">Tabs Pills</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/tooltipspopovers">Tooltips Popovers</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/dropdowns">Dropdowns</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/dropdowns">Modals</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/breadcrumbs">Breadcrumbs</DropdownItem>
                <DropdownItem tag={ Link } to="/interface/navbars">Navbars</DropdownItem>
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
