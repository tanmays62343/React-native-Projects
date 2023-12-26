import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './OtpScreen';
import BottomBarScreen from './BottomBarScreen';


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='AboutScreen' component={AboutScreen}></Stack.Screen>
                <Stack.Screen name='Bt_BarScreen' component={BottomBarScreen}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}



const styles = StyleSheet.create({
    
})