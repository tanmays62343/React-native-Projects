import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'

export default function App() {

  const stack = createStackNavigator()

  return (
    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen name='Home' component={HomeScreen} options={{title : "Forms"}}/>

      </stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})