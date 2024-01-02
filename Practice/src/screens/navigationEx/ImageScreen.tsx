import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetails from '../../components/ImageDetails'




export default function imageScreen() {
    return (
        <View>


            <ImageDetails
                title="Forest"
                source={require('../../assets/forest.jpg')}
            />

            <ImageDetails
                title="Beach"
                source={require('../../assets/beach.jpg')}
            />

            <ImageDetails
                title="Mountain"
                source={require('../../assets/mountain.jpg')}
            />

        </View>
    )
}

const styles = StyleSheet.create({

})