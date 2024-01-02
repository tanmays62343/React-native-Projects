import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Headlines from './Headlines'
import AllNews from './AllNews'

export default function BottomBarScreen() {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconSource


          // if (route.name === 'Headlines') {
          //   iconSource = focused
          //     ? require('./assets/newspaper-variant-multiple.png')
          //     : require('./assets/newspaper-variant-multiple-outline.png');
          // } else if (route.name === 'All News') {
          //   // Replace 'newspaper.png' with the actual filename of your custom icon
          //   iconSource = focused ? require('./assets/newspaper.png') : require('./assets/newspaper.png');
          // }

          if (route.name == 'Headlines') {
            iconSource = require('../../assets/headlines.png')
          }
          else if (route.name == "All News") {
            iconSource = require('../../assets/allNews.png')
          }

          return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;

        }

      })}
    >

      <Tab.Screen name="Headlines" component={Headlines} />
      <Tab.Screen name="All News" component={AllNews} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  }
})