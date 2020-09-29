import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
