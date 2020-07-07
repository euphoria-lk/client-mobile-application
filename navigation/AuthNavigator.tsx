import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login';
import Profile from '../screens/CounselorProfile';

const AuthStack = createStackNavigator()

export default () => {
    return (
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name="Sign In" component={Login} />
        </AuthStack.Navigator>
    );
}