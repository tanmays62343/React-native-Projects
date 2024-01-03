import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";


const stack = createStackNavigator()

export default function App() {



    return (
        <NavigationContainer>

            <stack.Navigator>

                <stack.Screen name="SearchScreen" component={SearchScreen} options={{title: "Business Search"}} />
                <stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title : "Details"}} />
                

            </stack.Navigator>

        </NavigationContainer>
    )

}

const styles = StyleSheet.create({})