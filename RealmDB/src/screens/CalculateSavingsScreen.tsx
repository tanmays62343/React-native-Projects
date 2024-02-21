import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'
import { Button, Checkbox, TextInput } from 'react-native-paper'
import BouncyCheckbox from "react-native-bouncy-checkbox"

const CalculateSavingsScreen = () => {

  const [selectedValue, setSelectedValue] = useState("")
  const [consumerNumber, setConsumerNumber] = useState("")
  const [rooftopArea, setRooftopArea] = useState("")
  const [billing, setBilling] = useState("")
  const [averageBill, setAverageBill] = useState("")
  const [averageUnitConsumed, setAverageUnitConsumed] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ]

  const billingOptions = [
    { label: 'Bi-Monthly', value: 'Bi-Monthly' },
    { label: 'Monthly', value: 'Monthly' },
  ]

  return (
    <SafeAreaView>

      <View style={styles.Card}>

        <Dropdown
          //mode='modal'
          labelField="label"
          valueField="value"
          value={selectedValue}
          style={styles.Dropdown}
          placeholder='Select a Discom'
          data={options}
          onChange={(item) => setSelectedValue(item.value)}
        />

        {selectedValue != "" && (
          <>

            < TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Application Number"
              //inputMode='numeric'
              value={consumerNumber}
              onChangeText={text => setConsumerNumber(text)}
            />

            <TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Rooftop Area (in ft2)"
              //inputMode='numeric'
              value={rooftopArea}
              onChangeText={text => setRooftopArea(text)}
            />

            <Dropdown
              labelField="label"
              valueField="value"
              value={billing}
              style={styles.Dropdown}
              placeholder='Select Billing'
              data={billingOptions}
              onChange={(item) => setBilling(item.value)}
            />

            {/* Average Bill */}
            <TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Average Bill (in ₹)"
              //inputMode='numeric'
              value={averageBill}
              onChangeText={text => setAverageBill(text)}
            />

            {/* Average units Consumed */}
            <TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Average Units Consumed(in KW)"
              //inputMode='numeric'
              value={averageUnitConsumed}
              onChangeText={text => setAverageUnitConsumed(text)}
            />

            <TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Mobile Number"
              //inputMode='numeric'
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)}
            />

            <TextInput
              mode='outlined'
              style={styles.textInputs}
              label="Email"
              //inputMode='numeric'
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <Button
              mode='contained'
              style={styles.button}
            >
              Submit
            </Button>

            <View style={{flexDirection:"row", alignItems:'flex-start'}}>
            <BouncyCheckbox 
            onPress={handleCheckboxToggle}
            />
            <Text>Agree To all Terms and Conditions</Text>
            </View>

          </>
        )}

      </View>

    </SafeAreaView>
  )
}

export default CalculateSavingsScreen

const styles = StyleSheet.create({
  Card: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    padding: 16,
  },
  Dropdown: {
    elevation: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth : 1,
    padding: 4,
    margin: 10
  },
  textInputs: {
    margin: 10
  },
  button: {
    backgroundColor: '#F9b120',
    margin: 20
  },
})