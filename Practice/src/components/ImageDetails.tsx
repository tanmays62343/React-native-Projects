import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'


interface ImageDetailProps {
    title: string
    source : any
}


const ImageDetails: React.FC<ImageDetailProps> = ({ title, source }) => {
    return (

        <View>
            
            <Image 
            style = {styles.img}
            source={source}
            />
            
            <Text>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
img : {
    height : 200,
    width : 200
}
})

export default ImageDetails


