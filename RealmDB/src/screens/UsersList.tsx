import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Realm from 'realm';
import { useFocusEffect } from '@react-navigation/native';\

//To Implement this install Realm Package

// Define interface for User
interface User {
  name: string;
  number: string;
  email: string;
}

interface UserListScreenProps {
  navigation: any;
}

// Define Card component to render each user item
const Card: React.FC<{ user: User }> = ({ user }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>Name: {user.name}</Text>
    <Text style={styles.cardText}>Number: {user.number}</Text>
    <Text style={styles.cardText}>Email: {user.email}</Text>
  </View>
);

export default function UsersList({ navigation }: UserListScreenProps) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const realm = await Realm.open({
        schema: [{
          name: 'UsersData',
          properties: {
            name: 'string',
            number: 'string',
            email: 'string',
          },
        }],
      });
      const usersData = realm.objects<User>('UsersData');
      const usersArray = Array.from(usersData);
      setUsers(usersArray);
    } catch (error) {
      console.error('Error fetching data from Realm:', error);
    }
  };

  const deleteAllData = async () => {
    try {
      const realm = await Realm.open({
        schema: [{
          name: 'UsersData',
          properties: {
            name: 'string',
            number: 'string',
            email: 'string',
          },
        }],
      });
      realm.write(() => {
        realm.deleteAll();
        setUsers([]);
      });
    } catch (error) {
      console.error('Error deleting data from Realm:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View>
      <Button title="Delete All Data" onPress={deleteAllData} />
      <Button title="Add User" onPress={() => navigation.navigate('FormScreen')} />
      <FlatList
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
