import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { createRxDatabase } from 'rxdb/plugins/core'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'


const FormScreen = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const db = createRxDatabase({name : "UsersList", storage : getRxStorageDexie()})
  }, [])

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textsInputs}
        placeholder='Name'
        keyboardType='name-phone-pad'
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.textsInputs}
        placeholder='Mobile No'
        keyboardType='number-pad'
        onChangeText={(text) => setNumber(text)}
      />

      <TextInput
        style={styles.textsInputs}
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
      />

      <Button
        style={styles.buttons}
        //onPress={handleSubmit}
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
