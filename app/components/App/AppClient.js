import React, { useContext } from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';
import Login from '../../routes/Pages/Login';
import { UserContext } from "../../providers/UserProvider";

const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
    const user = useContext(UserContext);
    return (
        user ?
        <Router basename={ basePath }>
            <AppLayout>
                <RoutedContent />
            </AppLayout>
        </Router>
        :
        <Router basename={ basePath }>
            <AppLayout>
                <Login/>
            </AppLayout>
        </Router>
    );
}

export default hot(module)(AppClient);