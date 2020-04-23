import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={} />
        <RootStack.Screen name="SignInScreen" component={} />
        <RootStack.Screen name="SignUpScreen" component={} />
    </RootStack.Navigator>
)

export default RootStackScreen;
