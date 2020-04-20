import React from 'react';
import _ from 'lodash';

import {
    Media,
    Avatar,
    Button,
    ButtonGroup,
} from '../../../components';
import { db } from '../../../firebase/firebase';

export class UserTable extends React.Component {
    state = {
        users: null
    }

    async componentDidMount() {
        let query = await db.collection("users").where("type", "==", "unverified").get();
        let docs = [];
        query.forEach((doc) => {
            docs.push(doc.data());
        });
        this.setState({
            users: docs
        });
    }

    render() {
        return (
            <React.Fragment>
                {
                    _.times((this.state.users || []).length, (index) => {
                        let user = this.state.users[index];
                        let userDisplayName = user.displayName.split(" ");
                        return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <Media>
                                        <Media left middle className="mr-3">
                                            <Avatar.Image
                                                size="md"
                                                src={user['photoURL']}
                                            />
                                        </Media>
                                        <Media body>
                                            <div className="mt-0 d-flex text-inverse">
                                                {userDisplayName[0]} {userDisplayName[1]}
                                            </div>
                                            <span>
                                                {user['email']}
                                            </span>
                                        </Media>
                                    </Media>
                                </td>
                                <td className="align-middle text-center">
                                    <ButtonGroup>
                                        <Button outline color="secondary" onClick={() => this.updateUserType(user, 'admin')}>Admin</Button>
                                        <Button outline color="secondary" onClick={() => this.updateUserType(user, 'volunteer')}>Volunteer</Button>
                                        <Button outline color="secondary" onClick={() => this.updateUserType(user, 'ignore')}>Ignore</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        );
                    })
                }
            </React.Fragment>
        );
    }

    updateUserType(user , userType) {
        db.collection('users').doc(user['uid']).update({
            type: userType
        })
        this.setState(state => {
            const users = state.users.filter((user) => user !== user);
            return {
                users
            };
        });
    }
}
