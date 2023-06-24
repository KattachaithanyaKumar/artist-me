import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import OnboardingPage from './screens/OnboardingPage';
import Login from './screens/Login';
import Home from './screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingPage}
          options={{
            headerShown: false,
            animation: "slide_from_left"
          }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false,
            animation: "slide_from_left"
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false,
            animation: "slide_from_left"
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App