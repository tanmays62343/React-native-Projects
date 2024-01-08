import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'

export default function Home() {

  const blogPosts = useContext(BlogContext)
  
  return (

    <View>
      
      <FlatList 
      data={blogPosts}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({item}) => { 
        return(
        <Text>{item.title}</Text>
        )
      }}
      />

    </View>

  )

}

const styles = StyleSheet.create({

})