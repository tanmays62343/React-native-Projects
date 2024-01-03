import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


interface SearchScreenProps{
    search : string,
    onSearchChange : any
    onSearchSubmitted : any
}


const SearchBar : React.FC<SearchScreenProps> = ({search, onSearchChange, onSearchSubmitted}) => {

    return (
        <View style={styles.container}>

            <Image style = {styles.icon} source={require('../../assets/search.png')} />

            {/* <Icon name="search" size={30} color={'#000000'} /> */}

            <TextInput
             style = {styles.etSearch} 
             placeholder='Search'
             value= {search}
             onChangeText={(text) => onSearchChange(text)}
             onEndEditing={() => onSearchSubmitted()}
             />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        borderRadius: 8,
        padding : 4,
        flexDirection : 'row',
        alignItems : 'center',
        margin: 12,
        backgroundColor: '#7B8788',
    },
    icon : {
        height : 25,
        width : 25,
        marginHorizontal : 6,
    },
    etSearch : {
        height : 40,
        backgroundColor : "#ffffff",
        borderRadius : 8,
        flex : 1,
    }
})

export default SearchBar