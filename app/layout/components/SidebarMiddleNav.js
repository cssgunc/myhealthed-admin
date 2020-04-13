import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
        <SidebarMenu>
        <SidebarMenu.Item title="API Demo" to='/demo' exact />
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Layouts"
        >
            <SidebarMenu.Item title="Sidebar" to='/layouts/sidebar' exact />
            <SidebarMenu.Item title="Sidebar A" to='/layouts/sidebar-a' exact />
            <SidebarMenu.Item title="Drag &amp; Drop" to='/layouts/dnd-layout' exact />
        </SidebarMenu.Item>
        { /* -------- Interface ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-toggle-on"></i>}
            title="Interface"
        >
            <SidebarMenu.Item title="Colors" to='/interface/colors' />
            <SidebarMenu.Item title="Typography" to='/interface/typography' />
            <SidebarMenu.Item title="Buttons" to='/interface/buttons' />
            <SidebarMenu.Item title="Paginations" to='/interface/paginations' />
            <SidebarMenu.Item title="Images" to='/interface/images' />
            <SidebarMenu.Item title="Avatars" to='/interface/avatars' />
            <SidebarMenu.Item title="Progress Bars" to='/interface/progress-bars' />
            <SidebarMenu.Item title="Badges &amp; Labels" to='/interface/badges-and-labels' />
            <SidebarMenu.Item title="Media Objects" to='/interface/media-objects' />
            <SidebarMenu.Item title="List Groups" to='/interface/list-groups' />
            <SidebarMenu.Item title="Alerts" to='/interface/alerts' />
            <SidebarMenu.Item title="Accordions" to='/interface/accordions' />
            <SidebarMenu.Item title="Tabs Pills" to='/interface/tabs-pills' />
            <SidebarMenu.Item title="Tooltips &amp; Popovers" to='/interface/tooltips-and-popovers' />
            <SidebarMenu.Item title="Dropdowns" to='/interface/dropdowns' />
            <SidebarMenu.Item title="Modals" to='/interface/modals' />
            <SidebarMenu.Item title="Breadcrumbs" to='/interface/breadcrumbs' />
            <SidebarMenu.Item title="Navbars" to='/interface/navbars' />
            <SidebarMenu.Item title="Notifications" to='/interface/notifications' />
            <SidebarMenu.Item title="Crop Image" to='/interface/crop-image' />
            <SidebarMenu.Item title="Drag &amp; Drop Elements" to='/interface/drag-and-drop-elements' />
            <SidebarMenu.Item title="Calendar" to='/interface/calendar' />
        </SidebarMenu.Item>
        { /* -------- Tables ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Tables"
        >
            <SidebarMenu.Item title="Tables" to='/tables/tables' />
            <SidebarMenu.Item title="Extended Tables" to='/tables/extended-table' />
        </SidebarMenu.Item>
        { /* -------- Pages ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-copy"></i>}
            title="Pages"
        >
            <SidebarMenu.Item title="Register" to="/pages/register" />
            <SidebarMenu.Item title="Login" to="/pages/login" />
            <SidebarMenu.Item title="Forgot Password" to="/pages/forgot-password" />
            <SidebarMenu.Item title="Error 404" to="/pages/error-404" />
            <SidebarMenu.Item title="Timeline" to="/pages/timeline" />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            href='https://webkom.gitbook.io/spin/v/airframe/airframe-react/documentation-react'
        />
    </SidebarMenu >
);
