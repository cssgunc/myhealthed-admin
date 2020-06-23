import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

const SidebarTopA = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                        FName LName
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem tag={ Link } to="/apps/settings-edit">
                        Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <div className="small sidebar__link--muted">
                    JobTitle
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTopA };
