import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'


const stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen name='Home' component={Home} options={{ title: "Blogs" }} />

      </stack.Navigator>

    </NavigationContainer>

  )
}