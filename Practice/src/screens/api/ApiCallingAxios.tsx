import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { axiosApiGetRequest, axiosApiPostRequest } from './AxiosApiRequests'
import { Button } from 'react-native-paper';


type Country = {
    id: number;
    iso: string;
    name: string;
    nicename: string;
    iso3: string | null;
    numcode: number | null;
    phonecode: string;
}

export default function ApiCallingAxios() {

    const [countries, setCountries] = useState<Country[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     getData()
    // }, [])

    const showLoader = () => {
        return <ActivityIndicator size={'large'} />
    }

    const getData = async () => {

        // await axiosApiGetRequest()
        // .then(res => {console.log("BRB",res.data)})
        // .catch(error => {console.log(error)})

        await axiosApiPostRequest(

            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getCountries",

            {
                id: 1
            }
        )
            .then(res => {
                console.log(res.data.data)
                setCountries(res.data.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

    }

    return (
        <View style={styles.container}>

            <Button
            mode='elevated'
            onPress={() => {
                getData()
                setIsLoading(true)
            }}
            >
                Fetch Data
            </Button>

            {isLoading ? showLoader() : null}

            <FlatList
                data={countries}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.countryContainer}>
                        <Text style={styles.headers}>{item.name}</Text>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    headers: {
        fontSize: 24,
    },
    countryContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 3, // For Android elevation
        shadowColor: '#000', // For iOS shadow
        shadowOpacity: 0.3,
        shadowRadius: 2,
    }
})