import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'

const TrackApplicationScreen = () => {

    const [applicationNo, setApplicationNo] = useState("")
    const [consumerNo, setConsumerNo] = useState("")
    const [mobileNo, setMobileNo] = useState("")

    const clearFields = () => {
        setApplicationNo("")
        setConsumerNo("")
        setMobileNo("")
    }

    return (
        <SafeAreaView style={styles.Container}>

            <View style={styles.Card}>

                {/* Application Number */}
                <TextInput
                    mode='outlined'
                    style={styles.textInputs}
                    label="Application Number"
                    //inputMode='numeric'
                    value={applicationNo}
                    onChangeText={text => setApplicationNo(text)}
                />

                {/* Consumer Number */}
                <TextInput
                    mode='outlined'
                    style={styles.textInputs}
                    label="Consumer Number"
                    value={consumerNo}
                    onChangeText={text => setConsumerNo(text)}
                />

                {/* Mobile Number */}
                <TextInput
                    mode='outlined'
                    style={styles.textInputs}
                    label="Mobile Number"
                    inputMode='numeric'
                    value={mobileNo}
                    onChangeText={text => setMobileNo(text)}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        mode='contained'
                        style={styles.button}
                        onPress={clearFields}
                    >
                        Clear
                    </Button>

                    <Button
                        mode='contained'
                        style={styles.button}
                    >
                        Search
                    </Button>
                </View>
                
                <Text style = {styles.texts}>
                    Consumer can do the following activities from here by entering your Application Number, 
                    Consumer Number and Consumer Mobile Number:
                    {'\n'}
                    {'\n'}1. Upload Payment Receipt of payment made to Installer.
                    {'\n'}2. Track Application Status.
                </Text>

            </View>

        </SafeAreaView>
    )
}

export default TrackApplicationScreen

const styles = StyleSheet.create({
    Container: {

    },
    Card: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 3,
        padding: 16,
    },
    textInputs: {
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    button: {
        flex: 1,
        backgroundColor : '#F9b120',
        marginHorizontal: 4,
    },
    texts : {
        marginTop : 15
    }
})