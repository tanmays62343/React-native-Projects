import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {

  const stack = createStackNavigator()

  return (
    <GestureHandlerRootView style={{flex : 1}}>

      <NavigationContainer>

        <stack.Navigator>

          {/* HomeScreen */}
          <stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
            title: "Customer Lead",
            headerStyle : {
              backgroundColor : '#FAD02E'
            },
            headerTitleStyle : {
              fontWeight : 'bold'
            },
            headerTintColor : 'white'
          }}
          />

          
        </stack.Navigator>

      </NavigationContainer>

    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})