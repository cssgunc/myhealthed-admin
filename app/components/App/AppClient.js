import React, { useContext } from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UserContext } from "../../providers/UserProvider";
import auth, { googleSignIn } from '../../auth/firebase';

const uiConfig = {
    signInOptions: [googleSignIn],
    credentialHelper: 'none'
};

const basePath = process.env.BASE_PATH || '/';

const LoginBoxContainer = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '100vh',
};

const LoginBox = {
    'width': '365px',
}

const AppClient = () => {
    const user = useContext(UserContext);
    return (
        user ?
            <Router basename={basePath}>
                <AppLayout>
                    <RoutedContent />
                </AppLayout>
            </Router>
            :
            <div style={LoginBoxContainer}>
                <div style={LoginBox}>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </div>
            </div>
    );
}

export default hot(module)(AppClient);