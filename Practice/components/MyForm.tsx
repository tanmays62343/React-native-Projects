import { Alert, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button, TextInput } from 'react-native-paper'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'


type UserData = {
  id: number;
  name: string;
  email: string;
  mobileNo: string;
  password: string;
  //gender : string;
}


export default function MyForm() {

  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [password, setPassword] = useState("")
  //const [gender, setGender] = useState("")

  const [registeredPeopel, setRegisteredPeopel] = useState<UserData[]>([])

  const onSubmit = () => {

    if (!name || !email || !mobileNo || !password) {
      Alert.alert("All Fields are mandatory.")
    }

    setId(id => id + 1)
    const newRegistration: UserData = { id, name, email, mobileNo, password } //,gender
    setRegisteredPeopel([...registeredPeopel, newRegistration])

    clearInputFields()

  }

  const clearInputFields = () => {
    setName("")
    setEmail("")
    setMobileNo("")
    setPassword("")
    //setGender("")
  }

  const emptyUserData = () => {
    setRegisteredPeopel([])
  }



  return (

    <SafeAreaView>
      <ScrollView>

        <View style={styles.toolbar}>

          <Text style={styles.headingText}> Registration Form </Text>

        </View>

        <View style={styles.formContainer}>

          <TextInput
            style={styles.textInput}
            placeholder='Name'
            value={name}
            onChangeText={text => setName(text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            value={mobileNo.toString()}
            onChangeText={text => setMobileNo(text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <View style={styles.Btn_View}>

            <Button
              style={styles.Btn_Submit}
              mode='elevated'
              textColor='#000000'
              onPress={() => onSubmit()}
            >
              Submit
            </Button>

            <Button
              style={styles.Btn_Reset}
              mode='elevated'
              textColor='#000000'
              onPress={() => {
                clearInputFields()
                emptyUserData()
                }
              }
            >
              Reset
            </Button>

          </View>

        </View>

      </ScrollView>


      {registeredPeopel.length > 0 && (
        <View>

          <FlatList
            data={registeredPeopel}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.showFormData}>
                <Text>Name: {item.name}</Text>
                <Text> Email: {item.email} </Text>
                <Text>Mobile Number: {item.mobileNo}</Text>
                <Text>Password: {item.password}</Text>
                {/* <Text>Gender: {item.gender}</Text> */}
              </View>
            )}
          />

        </View>
      )}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  toolbar: {
    backgroundColor: "#6A89CC",
    alignItems: "center",
    padding: 8,
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    marginTop: 14,
    flexDirection: 'column',
  },
  textInput: {
    flex: 1,
    borderRadius: 8,
    height: 48,
    margin: 12,
    justifyContent: 'center'
  },
  Btn_Submit: {
    backgroundColor: "#7CEC9F",
    margin: 4,
  },
  Btn_Reset: {
    backgroundColor: "#8395A7",
    margin: 4
  },
  Btn_View: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 14,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  showFormData: {
    alignItems: 'center',
    marginTop: 14,
    borderColor: "#1287A5",
    borderWidth: 2,
    padding: 8
  }
})