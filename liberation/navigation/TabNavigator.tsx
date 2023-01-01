import React from 'react';
import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import BookListScreen from '../screens/BookList';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faBook} from '@fortawesome/free-solid-svg-icons';

export type TabBarParamList = {
    BookListScreen: undefined;
};

const Tab = createBottomTabNavigator<TabBarParamList>();

type Tab = {
    routeName: string;
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='BookListScreen'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderRadius: 20,
                    marginHorizontal: 30,
                    marginBottom: 5,
                    position: 'absolute',
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="BookListScreen"
                component={BookListScreen}
                options={{
                    tabBarActiveTintColor: 'blue',
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faBook} color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;