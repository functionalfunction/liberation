import React from "react";
import { createStackNavigator, } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName="TabNavigator"
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name = "TabNavigator" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default HomeNavigator;