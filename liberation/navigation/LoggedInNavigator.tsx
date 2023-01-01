import React from "react";
import { createStackNavigator, } from '@react-navigation/stack';
import BookListScreen from "../screens/BookList";
import BookDetailScreen from "../screens/BookDetail";
import Book from "../models/book";
import HomeNavigator from "./HomeNavigator";

export type LoggedInStackParamList = {
    HomeNavigator: undefined;
    BookListScreen: undefined;
    BookDetailScreen: {book : Book};
}

const Stack = createStackNavigator<LoggedInStackParamList>();

const LoggedInNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
        </Stack.Navigator>
    );
};

export default LoggedInNavigator;