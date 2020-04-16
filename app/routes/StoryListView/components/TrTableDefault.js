import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';
import { randomAvatar } from './../../../utilities';

/*eslint-disable */
const colorStatus = [
    "danger",
    "success",
    "warning",
    "secondary"
];
/*eslint-enable */

const TrTableDefault = (props) => (
    <React.Fragment>
        {
            _.times(4, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id={"cb" + index }/>
                            <label class="custom-control-label" for={"cb" + index }></label>
                        </div>
                    </td>
                    <td className="align-middle">
                        <div className={ props.projectColor }>
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span>
                            { faker.company.companyName() }
                        </span>
                    </td>
                    <td className="align-middle">
                        <div>
                            Thursday
                        </div>
                        <span className="text-danger">
                            Overdue
                        </span>
                    </td>
                    <td className="align-middle">
                        <Media>
                            <Media left middle className="mr-3">
                                <Avatar.Image
                                    size="md"
                                    src={ randomAvatar() }
                                    addOns={[
                                        <AvatarAddOn.Icon
                                            className="fa fa-circle"
                                            color={ props.leaderStatus }
                                            key="avatar-icon-bg"
                                        />,
                                        <AvatarAddOn.Icon
                                            className="fa fa-circle"
                                            color={ colorStatus[index%4] }
                                            key="avatar-icon-fg"
                                        />
                                    ]}
                                />
                            </Media>
                            <Media body>
                                <div className="mt-0 d-flex text-inverse">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span>
                                    { faker.name.jobTitle() }
                                </span>
                            </Media>
                        </Media>
                    </td>
                    <td className="align-middle">
                        <div>
                            { faker.finance.amount() }
                        </div>
                        <span>
                            Paid
                        </span>
                    </td>
                    <td className="align-middle">
                        <i className="fa fa-circle-o text-success mr-2"></i>
                        { faker.finance.transactionType() }
                    </td>
                    <td className="align-middle text-right">
                        <UncontrolledButtonDropdown direction="left">
                            <DropdownToggle color="link" outline className={` text-decoration-none ${ props.dropdownColor } `}>
                                <i className="fa fa-ellipsis-v"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-pencil-square-o mr-2"></i>
                                    Edit
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="fa fa-fw fa-trash-o mr-2"></i>
                                    Delete
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

TrTableDefault.propTypes = {
    projectColor: PropTypes.node,
    leaderStatus: PropTypes.node,
    dropdownColor: PropTypes.node
};
TrTableDefault.defaultProps = {
    projectColor: "text-inverse",
    leaderStatus: "white",
    dropdownColor: ""
};

export { TrTableDefault };