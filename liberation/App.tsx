import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

const App = () => {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator></AppNavigator>
    </GestureHandlerRootView>
  );

};

export default App;
