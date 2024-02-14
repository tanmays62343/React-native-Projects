import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Realm from 'realm'

interface User {
    name: string
    number: string
    email: string
}

interface FormScreenProps {
    navigation: any;
  }

const FormScreen = ({navigation}: FormScreenProps) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")

    // useEffect(() => {
    //     // Function to fetch data from Realm when component mounts
    //     const fetchData = async () => {
    //         try {
    //             const realm = await Realm.open({
    //                 schema: [{
    //                     name: 'UsersData',
    //                     properties: {
    //                         name: 'string',
    //                         number: 'string',
    //                         email: 'string'
    //                     }
    //                 }]
    //             });
    //             const usersData = realm.objects<User>('UsersData');
    //             // Convert Realm Results to a regular array
    //             const usersArray = Array.from(usersData);
    //             // Log the fetched array
    //             console.log('Fetched Users:', usersArray);
    //         } catch (error) {
    //             console.error('Error fetching data from Realm:', error);
    //         }
    //     };
    //     fetchData(); // Call the fetchData function when the component mounts
    // }, []);

    const saveData = async () => {
        //Create a Realm instance
        const realm = await Realm.open({
            schema: [{
                name: 'UsersData',
                properties: {
                    name: 'string',
                    number: 'string',
                    email: 'string'
                }
            }]
        })
        //Create a new user Object
        const user: User = {
            name,
            number,
            email
        }
        //write the user data to database
        realm.write(() => {
            realm.create('UsersData', user)
        })
        console.log("Data saved Successfully")
        console.log(user)
        clearFields()
        navigation.navigate("UsersList")
    }

    const clearFields = () => {
        setName('')
        setNumber('')
        setEmail('')
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textsInputs}
                placeholder='Name'
                keyboardType='name-phone-pad'
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.textsInputs}
                placeholder='Mobile No'
                keyboardType='number-pad'
                value={number}
                onChangeText={(text) => setNumber(text)}
            />

            <TextInput
                style={styles.textsInputs}
                placeholder='Email'
                keyboardType='email-address'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Button
                style={styles.buttons}
                onPress={saveData}
                mode='contained'
            >
                Submit
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textsInputs: {
        margin: 10,
    },
    buttons: {
        margin: 15
    }
})

export default FormScreen
