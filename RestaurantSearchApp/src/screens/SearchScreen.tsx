import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useSearchResults from '../hooks/useSearchResults'
import ResultsList from '../components/ResultsList'
import { ActivityIndicator } from 'react-native-paper'

interface SearchScreenProps {
    navigation: any
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {

    const filterResultsByPrice = (price: string) => {

        return response.filter(result => {
            return result.price === price
        })
    }

    const [search, setSearch] = useState("")

    const [searchApi, response, errorMessage] = useSearchResults()

    return (
        <ScrollView style={styles.Container}>

            <SearchBar
                search={search}
                onSearchChange={setSearch}
                onSearchSubmitted={() => searchApi(search)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            {response.length == 0 ? <ActivityIndicator size={'large'} /> : (
                <>

                    <Text>We have found {response.length} results.</Text>
                    {response.length > 0 ? (
                        <>
                            <ResultsList navigation={navigation} results={filterResultsByPrice("$")} title="Cost Effective" />
                            <ResultsList navigation={navigation} results={filterResultsByPrice("$$")} title="Premium" />
                            <ResultsList navigation={navigation} results={filterResultsByPrice("$$$")} title="Luxury" />
                        </>
                    ) : null}


                </>
            )}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        padding: 2,
    }
})

export default SearchScreen