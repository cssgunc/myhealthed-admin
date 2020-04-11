import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import APIDemo from "./API_Demo/Demo"
import LinkDemo from "./Link/LinkDemo"
import ViewEdit from "./ViewEdit";
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';

import ExtendedTable from './Tables/ExtendedTable';

import Error404 from './Pages/Error404';
import Login from './Pages/Login';
import Timeline from './Pages/Timeline';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Route path="/demo" component={APIDemo} />
            <Route path="/link-demo" component={LinkDemo} />
            <Route path="/edit" component={ViewEdit} />

            <Redirect from="/" to="/demo" exact />
            
            { /*    Layouts     */ }
            <Route path='/layouts/sidebar' component={SidebarDefault} />
            <Route path='/layouts/sidebar-a' component={SidebarA} />

            { /*    Tables Routes   */ }
            <Route component={ ExtendedTable } path="/tables/extended-table" />

            { /*    Pages Routes    */ }
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Timeline } path="/pages/timeline" />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
