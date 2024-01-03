import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

interface ResultsDetailProps {
    result: any
}

const ResultsDetail: React.FC<ResultsDetailProps> = ({ result }) => {

    return (
        <View style={styles.Container} >

            <Image 
            style = {styles.imageStyle}
            source={{uri : result.image_url}}
            />

            <Text style={styles.restaurantNames} numberOfLines={1}> {result.name} </Text>

            <Text>Rating : {result.rating},  Reviews : {result.review_count}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        elevation: 4,
        height: 250,
        width: 250,
        marginHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff', // Sets a white background color
        shadowColor: '#000000', // Specifies the shadow color
        shadowOpacity: 10, // Sets the shadow opacity
        justifyContent: 'center', // Aligns content vertically in the center
        alignItems: 'center', // Aligns content horizontally in the center
    },
    restaurantNames: {
        fontSize: 14,
        fontWeight : 'bold',
        marginHorizontal: 4,
        marginVertical: 4
    },
    imageStyle: {
        height: 180,
        width: 180,
        borderRadius : 10,
        margin : 8
    }
})

export default ResultsDetail