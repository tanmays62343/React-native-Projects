import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PostApiNoHeaders } from '../api/ApiInterface'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'

type Country = {
    id: number;
    name: string;
    phonecode: string;
}

interface ApiData {
    id: string,
    name: string
}

const HomeScreen = () => {

    useEffect(() => {
        getCountries()
    }, [])

    const sheetRef = useRef<BottomSheet>(null)

    const [selectedItem, setSelectedItem] = useState<ApiData>()

    const [data, setData] = useState()

    const selectItem = (item: ApiData) => {
        setSelectedItem(item);
        sheetRef.current?.close();
    };

    const renderItem = ({ item }: { item: { id: string; name: string } }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                selectItem(item)
                sheetRef.current?.close()
            }}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )

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
                setData(res.data.data)
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
        <>
            <ScrollView style={styles.container}>

                {/* Countries */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}> 
                        {selectedItem ? selectedItem.name : "Select an Item"} 
                        </Text>

                    </View>
                </TouchableWithoutFeedback>

                {/* States */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}> 
                        {selectedItem ? selectedItem.name : "Select an Item"} 
                        </Text>

                    </View>
                </TouchableWithoutFeedback>

            </ScrollView>

            <BottomSheet
                ref={sheetRef}
                index={-1}
                snapPoints={['70%']}
            >
                <BottomSheetFlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />

                <Button
                    title='Clear'
                    onPress={() => sheetRef.current?.close()}
                />

            </BottomSheet>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    textInput: {
        height: 48,
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 8,
    },
    selectedText: {
        fontSize: 18,
    },
    selectedItemContainer: {
        marginTop: 20,
    }
})