import { View, Text, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './HomeScreen';
import Profile from './Profile';

const Home = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea} >
      <Tab.Navigator initialRouteName='Explore' activeColor='#F7931E'>
        <Tab.Screen 
          name="Explore" 
          component={HomeScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#F7931E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})