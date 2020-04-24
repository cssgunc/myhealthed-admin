import React from 'react';
import PropTypes from 'prop-types';

import './../../../styles/view-edit.scss';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="list-row">
                    {this.props.children}
                    <img
                        onClick={this.props.delete}
                        src={require('../icons/trashcan.png')}
                        alt="Trash Can Icon"
                        className="trash-can"
                    />
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    children: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired
}