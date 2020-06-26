import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item title="API Demo" to='/demo' exact />
        <SidebarMenu.Item title="Link Demo" to='/link-demo' exact />
        <SidebarMenu.Item title="Story Edit and View" to='/edit' exact />
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Layouts"
        >
            <SidebarMenu.Item title="Sidebar" to='/layouts/sidebar' exact />
            <SidebarMenu.Item title="Sidebar A" to='/layouts/sidebar-a' exact />
        </SidebarMenu.Item>
        { /* -------- Tables ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Tables"
        >
            <SidebarMenu.Item title="Extended Tables" to='/tables/extended-table' />
        </SidebarMenu.Item>
        { /* -------- Pages ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-copy"></i>}
            title="Pages"
        >
            <SidebarMenu.Item title="Login" to="/pages/login" />
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
