import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/homeScreen';
import Result from '../screens/resultScreen';

const Stack = createStackNavigator();
const homeStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function Homes() {
  return (
    <homeStack.Navigator screenOptions={navOptionHandler}>
      <homeStack.Screen name="home" component={Home} />
      <homeStack.Screen name="result" component={Result} />
    </homeStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navOptionHandler}>
        <Stack.Screen name="homes" component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
