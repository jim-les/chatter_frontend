import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// imports
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen ';
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import SettingsScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Intro"
        >
            <Stack.Screen name="Intro" component={IntroScreen} options={{ title: 'Intro' }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Signup' }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name="Chart" component={ChartScreen} options={{ title: 'Chart' }}/>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;

