import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import SavedScreen from './screens/Saved';
import AboutScreen from './screens/About';
import FeedbackScreen from './screens/Feedback';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';
import RateUsScreen from './screens/RateUs';
import SettingsScreen from './screens/Settings';
import ShareThisAppScreen from './screens/Share';
import DrawerContent from './screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStack = ({ navigation }) => (
    <Stack.Navigator initialRouteName="Home"
        headerMode="screen" screenOptions={{
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
        <Stack.Screen name='Home' component={HomeScreen} options={{
            title: 'Agarathi',
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}>
        </Stack.Screen>
        <Stack.Screen name="Saved" component={SavedScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="RateUs" component={RateUsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Share" component={ShareThisAppScreen} />
    </Stack.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={RootStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}