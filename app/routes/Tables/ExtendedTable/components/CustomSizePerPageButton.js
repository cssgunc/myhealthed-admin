import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../../components';

export const CustomSizePerPageButton = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
    ...ddProps
}) => (
    <UncontrolledButtonDropdown { ...ddProps }>
        <DropdownToggle size="sm" color="link" className="text-decoration-none">
            { currSizePerPage }<i className="fa fa-angle-down ml-2" />
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Page Size</DropdownItem>
            {
                map(options, option => (
                    <DropdownItem
                        onClick={() => onSizePerPageChange(option.page)}
                        active={option.page === parseInt(currSizePerPage, 10)}
                        key={option.page}
                    >
                        { option.text }
                    </DropdownItem>
                ))
            }
        </DropdownMenu>
    </UncontrolledButtonDropdown>
);
CustomSizePerPageButton.propTypes = {
    options: PropTypes.array,
    currSizePerPage: PropTypes.string,
    onSizePerPageChange: PropTypes.func
}
