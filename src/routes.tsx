import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#1987d1',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#121212' },
        }}
        initialRouteName="Home"
      >
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ title: 'GitFinderHub' }}
        />
        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Perfil' }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
