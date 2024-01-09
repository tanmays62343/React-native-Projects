import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PostApiNoHeaders } from '../api/ApiInterface'

type Country = {
    id: number;
    name: string;
    phonecode: string;
}


export default function HomeScreen() {

    const [countryId, setCountryId] = useState(0)
    const [stateId, setStateId] = useState(0)
    const [cityId, setCityId] = useState(0)
    const [districtId, setDistrictId] = useState(0)
    const [talukaId, setTalukaId] = useState(0)

    const getCountries = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getCountries",
            {}
        )
            .then(res => {
                console.log(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getStates = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getStates",
            { countryId: countryId }
            )
            .then(res => {
                console.log(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getCities = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getCities",
            { stateId: stateId }
            )
            .then(res => {
                console.log(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getDistricts = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getDistricts",
            { stateId: stateId }
            )
            .then(res => {
                console.log(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getTalukas = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getTaluka",
            { districtId: districtId }
            )
            .then(res => {
                console.log(res.data.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({

})