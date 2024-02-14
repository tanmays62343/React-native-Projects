import React from 'react'
import UsersList from './screens/UsersList'
import FormScreen from './screens/FormScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


//To Implement this install these packages
//npm install @react-navigation/native
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>

      <Stack.Screen name="UsersList" component={UsersList} ></Stack.Screen>
      <Stack.Screen name="FormScreen" component={FormScreen} ></Stack.Screen>

    </Stack.Navigator>

    </NavigationContainer>
  )
}