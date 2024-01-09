import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import BlogContext, { BlogPost, BlogProvider } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'

const Home: React.FC = () => {
  const blogPosts = useContext<BlogPost[]>(BlogContext);

  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const HomeScreen: React.FC = () => {
  return (
    <BlogProvider>
      <Home />
    </BlogProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

})