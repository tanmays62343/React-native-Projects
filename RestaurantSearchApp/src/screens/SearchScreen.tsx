import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useSearchResults from '../hooks/useSearchResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const filterResultsByPrice = (price : string) => {

        return response.filter(result => {
            return result.price === price
        })
    }

    const [search, setSearch] = useState("")

    const [searchApi, response, errorMessage] = useSearchResults()

    return (
        <ScrollView style = {styles.Container}>

            <SearchBar
                search={search}
                onSearchChange={setSearch}
                onSearchSubmitted={() => searchApi(search)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We have found {response.length} results.</Text>

            <ResultsList results={filterResultsByPrice("$")}   title = "Cost Effective"/>

            <ResultsList results={filterResultsByPrice("$$")}  title = "Premium" />

            <ResultsList results={filterResultsByPrice("$$$")} title = "Luxury" />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container : {
        padding : 2,
    }
})

export default SearchScreen