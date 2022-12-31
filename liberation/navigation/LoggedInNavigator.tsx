import React from "react";
import { createStackNavigator, } from '@react-navigation/stack';
import BookListScreen from "../screens/BookList";
import BookDetailScreen from "../screens/BookDetail";
import Book from "../models/book";

export type LoggedInStackParamList = {
    BookListNavigator: undefined
    BookListScreen: undefined;
    BookDetailScreen: {book : Book};
}

const Stack = createStackNavigator<LoggedInStackParamList>();

const LoggedInNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName="BookListNavigator"
            screenOptions={{
                headerShown: false,
            }}>
        </Stack.Navigator>
    );
};

export default LoggedInNavigator;