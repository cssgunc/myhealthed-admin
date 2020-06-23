import React from 'react';

import {
    Button,
    Sidebar,
    UncontrolledPopover,
    PopoverBody,
} from './../../../components';

import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';

const SidebarBottomB = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View  */ }
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <FooterAuth />
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <Button
                        color="link"
                        id="UncontrolledSidebarPopoverFooter"
                        className="sidebar__link p-0"
                    >
                        <i className="fa fa-fw fa-question-circle-o" />
                    </Button>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottomB };
