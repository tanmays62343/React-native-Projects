import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Image } from 'react-native-elements';

interface AboutScreenProps {
  navigation: any;
}

export default function AboutScreen({ navigation }: AboutScreenProps) {
  return (
    <View style={styles.Container}>

      <Image
      style = {styles.img}
      source={require("../../assets/otp_img.png")}
      />

      <View style = {styles.otpInputHolder}>

        <TextInput
          style={styles.textInput}
          placeholder='0'
          keyboardType='number-pad'
          maxLength={1}
        />

        <TextInput
          style={styles.textInput}
          placeholder='0'
          keyboardType='number-pad'
          maxLength={1}
        />

        <TextInput
          style={styles.textInput}
          placeholder='0'
          keyboardType='number-pad'
          maxLength={1}
        />

        <TextInput
          style={styles.textInput}
          placeholder='0'
          keyboardType='number-pad'
          maxLength={1}
        />

      </View>

      <Button
        mode='elevated'
        textColor='#000000'
        style={styles.btn}
        onPress={() => navigation.navigate("Bt_BarScreen")}
      >
        Verify OTP
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  otpInputHolder : {
    flexDirection : 'row'
  },
  textInput: {
    borderRadius: 8,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "#7CEC9F",
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    height: 40,
    width: 40,
    margin: 12,
  },
  txt : {
    fontSize : 24,
    fontWeight : 'bold',
    marginBottom : 15
},
  btn : {
    backgroundColor : "#7CEC9F",
    marginTop : 12,
    width : 150
  },
  img : {
    height : 200,
    width : 200,
    marginBottom : 18
}
})