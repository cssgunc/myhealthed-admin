import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
} from './../../../components';

export const SidebarA = () => (
    <Container>
        <h1 className="display-4 mb-4 mt-2">Sidebar A</h1>
        
        <p className="mb-5">
            Welcome to the <b>&quot;Airframe&quot;</b> Admin Dashboard Theme based on <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap 4.x</a> version for React called&nbsp;
            <a href="https://reactstrap.github.io" target="_blank" rel="noopener noreferrer">reactstrap</a> - easy to use React Bootstrap 4 components compatible with React 16+.
        </p>

        <section className="mb-5">
            <h6>
                Layouts for this framework:
            </h6>
            <ul className="pl-3">
                <li>
                    <Link to="/layouts/sidebar-a">Sidebar A</Link>
                </li>
                <li>
                    <Link to="/layouts/navbar-only">Navbar Only</Link>
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h6>
                This Starter has:
            </h6>
            <ul className="pl-3">
                <li>
                    <a href="https://webkom.gitbook.io/spin/v/airframe/airframe-react/documentation-react" target="_blank" rel="noopener noreferrer">Documentation</a> - which describes how to configure this version.
                </li>
                <li>
                    <a href="https://webkom.gitbook.io/spin/v/airframe/airframe-react/credits-react" target="_blank" rel="noopener noreferrer">Credits</a> - technical details of which versions are used for this framework.
                </li>
                <li>
                    <a href="https://webkom.gitbook.io/spin/v/airframe/airframe-react/roadmap-react" target="_blank" rel="noopener noreferrer">Roadmap</a> - update for this technology for the coming months.
                </li>
                <li>
                    <b>Bugs</b> - do you see errors in this version? Please report vie email: <i>info@webkom.co</i>
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h6>
                Work Orders:
            </h6>
            <p>
                Regarding configuration, changes under client&apos;s requirements.<br />
                Pleace contact us through the <a href="http://wbkom.co/contact" target="_blank" rel="noopener noreferrer">webkom.co/contact</a> website.
            </p>
        </section>
    </Container>
);
