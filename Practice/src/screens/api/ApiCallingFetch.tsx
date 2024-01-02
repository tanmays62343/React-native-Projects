import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { fetchApiGetRequest, fetchApiPostRequest } from './fetchApiRequests'

export default function ApiCallingFetch() {

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        //const data = await fetchApiGetRequest()
        const data = await fetchApiPostRequest({
            title: "Hello",
            body: "World",
            userId: 4
        }
        )
        console.log("BRB", data)
    }

    return (
        <View>

            <Text>ApiCallingFetch</Text>

        </View>
    )

}

const styles = StyleSheet.create({

})