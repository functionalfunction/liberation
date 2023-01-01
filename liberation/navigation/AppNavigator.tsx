import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoggedInNavigator from "./LoggedInNavigator";

const RootStack = createStackNavigator();

const AppNavigator = () => {

    const handleInitialRouteName = () => {
        return 'LoggedInNavigator';
    };

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={handleInitialRouteName()}>
                <RootStack.Screen name="LoggedInNavigator" component={LoggedInNavigator} options={{ headerShown: false, animationEnabled: false }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;