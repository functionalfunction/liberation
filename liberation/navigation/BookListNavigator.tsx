import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetailScreen from '../screens/BookDetail';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;