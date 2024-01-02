import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements';
import { Button, TextInput } from 'react-native-paper'

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.Container}>

      <Image
        style={styles.img}
        source={require('../../assets/login.png')}
      />

      <TextInput
        style={styles.textInput}
        placeholder='Mobile number'
        keyboardType='number-pad'
        maxLength={10}
      />

      <Button
        mode='elevated'
        textColor='#000000'
        style={styles.btn}
        onPress={() => navigation.navigate("AboutScreen")}
      >
        Login
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
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
    height: 48,
    width: 350,
    margin: 12,
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  btn: {
    backgroundColor: "#7CEC9F",
    marginTop: 12,
    width: 150
  },
  img: {
    height: 200,
    width: 200,
    marginBottom: 18
  }
})