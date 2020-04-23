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

const HomeStack = createStackNavigator();
const SavedStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{
            title: 'Agarathi',
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}>
        </HomeStack.Screen>
    </HomeStack.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeStackScreen} options={{

                }} />
                <Drawer.Screen name="Saved" component={SavedScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Feedback" component={FeedbackScreen} />
                <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
                <Drawer.Screen name="RateUs" component={RateUsScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="Share" component={ShareThisAppScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}