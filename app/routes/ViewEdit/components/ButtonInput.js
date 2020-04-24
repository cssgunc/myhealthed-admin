import React from 'react';
import PropTypes from 'prop-types';

import {
    Button
} from '../../../components';

// eslint-disable-next-line react/display-name
const ButtonInput = React.forwardRef((props, ref) => (
    <Button outline
        onClick={props.onClick}
        ref={ref}
    >
        <i className="fa fa-fw fa-calendar-o mr-1" />
        { props.value }
    </Button>
));
ButtonInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}

export default ButtonInput;