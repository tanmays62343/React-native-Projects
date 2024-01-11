import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import HomeScreen from './screens/Home'
import { BlogProvider } from './context/BlogContext'


const stack = createStackNavigator()

export default function App() {
  return (

    <BlogProvider>
      <NavigationContainer>

        <stack.Navigator>

          <stack.Screen name='Home' component={Home} options={{ title: "Blogs" }} />

        </stack.Navigator>

      </NavigationContainer>
    </BlogProvider>

  )
}