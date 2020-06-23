import React from 'react';

import { 
    Media,
    UncontrolledTooltip
} from './../../../components';

const TrResponsive = () => (
    <React.Fragment>
        { /* START TR */}
        <tr>
            <td className="align-middle">
                <i className="fa fa -fw fa-circle text-danger"></i>
            </td>
            <td className="align-middle">
                <Media>
                    <Media left className="align-self-center mr-3">
                        <i className="fa fa-fw fa-desktop fa-lg"></i>
                    </Media>
                    <Media body>
                        <div className="mt-0 d-flex">
                            <span className="text-inverse">
                                Safari
                            </span> / 
                            1
                        </div>
                        <span>
                            macOs 1
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                <div>
                    <samp>
                        ipaddr
                    </samp>
                </div>
                <span>
                    -
                </span>
            </td>
            <td className="align-middle">
                <div>
                    city
                </div>
                <span>
                    state, country
                </span>
            </td>
            <td className="align-middle">
                Monday, 12 January, 2018<br />
                12:34 PM
            </td>
            <td className="align-middle text-right">
                <a href="#" id="UncontrolledTooltipRevoke">
                    <i className="fa fa-fw fa-close text-danger"></i>
                </a>
                <UncontrolledTooltip placement="left" target="UncontrolledTooltipRevoke">
                    Revoke
                </UncontrolledTooltip>
            </td>
        </tr>
        { /* END TR */}
    </React.Fragment>
)

export { TrResponsive };
