import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Camera from '../screens/Camera';
import Gallery from '../screens/Gallery';

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
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{ headerTitle: () => <Text>Gallery</Text> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
