import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
<<<<<<< HEAD
import APIDemo from "./API_Demo/Demo"

=======
>>>>>>> e72f9f79f1cd637d57096a7919da80c6f47f1e7e
import Analytics from './Dashboards/Analytics';

import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';
import Notifications from './Interface/Notifications';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Calendar from './Interface/Calendar';
import ReCharts from './Graphs/ReCharts';

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';
import Register from './Pages/Register';
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

            <Redirect from="/" to="/dashboards/projects" exact />
            <Route path="/dashboards/analytics" exact component={Analytics} />
            
            { /*    Layouts     */ }
            <Route path='/layouts/sidebar' component={SidebarDefault} />
            <Route path='/layouts/sidebar-a' component={SidebarA} />
            <Route path='/layouts/dnd-layout' component={DragAndDropLayout} />

            { /*    Interface Routes   */ }
            <Route component={ Accordions } path="/interface/accordions" />
            <Route component={ Alerts } path="/interface/alerts" />
            <Route component={ Avatars } path="/interface/avatars" />
            <Route component={ BadgesLabels } path="/interface/badges-and-labels" />
            <Route component={ Breadcrumbs } path="/interface/breadcrumbs" />
            <Route component={ Buttons } path="/interface/buttons" />
            <Route component={ Colors } path="/interface/colors" />
            <Route component={ Dropdowns } path="/interface/dropdowns" />
            <Route component={ Images } path="/interface/images" />
            <Route component={ ListGroups } path="/interface/list-groups" />
            <Route component={ MediaObjects } path="/interface/media-objects" />
            <Route component={ Modals } path="/interface/modals" />
            <Route component={ Navbars } path="/interface/navbars" />
            <Route component={ Paginations } path="/interface/paginations" />
            <Route component={ ProgressBars } path="/interface/progress-bars" />
            <Route component={ TabsPills } path="/interface/tabs-pills" />
            <Route component={ TooltipPopovers } path="/interface/tooltips-and-popovers" />
            <Route component={ Typography } path="/interface/typography" />
            <Route component={ Notifications } path="/interface/notifications" />
            <Route component={ CropImage } path="/interface/crop-image" />
            <Route component={ DragAndDropElements } path="/interface/drag-and-drop-elements" />
            <Route component={ Calendar } path="/interface/calendar" />
            
            { /*    Graphs Routes   */ }
            <Route component={ ReCharts } path="/graphs/re-charts" />

            { /*    Tables Routes   */ }
            <Route component={ Tables } path="/tables/tables" />
            <Route component={ ExtendedTable } path="/tables/extended-table" />
            <Route component={ AgGrid } path="/tables/ag-grid" />

            { /*    Pages Routes    */ }
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
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
