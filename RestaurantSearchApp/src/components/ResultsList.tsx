import { Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'

interface ResultsListProps {
    results: any
    title: string
}

const ResultsList: React.FC<ResultsListProps> = ({ results, title }) => {


    return (
        <View style = {styles.Container} >

            <Text style={styles.titleStyle}> {title} </Text>

            <FlatList
                style = {styles.scrollList}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <ResultsDetail result = {item} />
                    )
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    Container : {
        height : 300,
        marginVertical : 8,
        marginHorizontal : 4,
    },
    scrollList : {
      flex :1,  
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom : 4
    },
})

export default ResultsList