import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PostApiNoHeaders } from '../api/ApiInterface'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'


interface ApiData {
    id: string,
    name: string
}

const HomeScreen = () => {

    useEffect(() => {
        getCountries()
    }, [])

    const sheetRef = useRef<BottomSheet>(null)



    const [data, setData] = useState()

    const [name, setName] = useState<string>()
    const [mobile, setMobile] = useState<string>()
    const [whatsapp, setWhatsapp] = useState<string>()
    const [pvCapacity, setPvCapacity] = useState<string>()

    const [country, setCountry] = useState<ApiData | null>(null)
    const [state, setState] = useState<ApiData | null>(null)
    const [city, setCity] = useState<ApiData | null>(null)
    const [district, setDistrict] = useState<ApiData | null>(null)
    const [taluka, setTaluka] = useState<ApiData | null>(null)

    const selectCountry = (item: ApiData) => {
        setCountry(item);
        getStates()
        sheetRef.current?.close();
    }

    const selectState = (item: ApiData) => {
        setState(item);
        getCities(item.id)
        sheetRef.current?.close();
    }

    const selectCity = (item: ApiData) => {
        setCity(item);
        sheetRef.current?.close();
    }

    const selectDistrict = (item: ApiData) => {
        setDistrict(item);
        sheetRef.current?.close();
    }

    const selectTaluka = (item: ApiData) => {
        setTaluka(item);
        sheetRef.current?.close();
    }

    const renderItem = ({ item }: { item: { id: string; name: string } }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                if (country == null) {
                    selectCountry(item)
                } else if (state == null) {
                    selectState(item)
                } else if (city == null) {
                    selectCity(item)
                } else if (district == null) {
                    selectDistrict(item)
                } else if (taluka == null) {
                    selectTaluka(item)
                }
            }}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )



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
            { countryId: country?.id }
        )
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getCities = async (id: string) => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getCities",
            { stateId: id }
        )
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getDistricts = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getDistricts",
            { stateId: state?.id }
        )
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => console.log(error))
    }

    const getTalukas = async () => {
        await PostApiNoHeaders(
            "https://staging-ahasolar-rewamp.ahasolar.in/api/place/getTaluka",
            { districtId: district?.id }
        )
            .then(res => {
                setData(res.data.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <ScrollView style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    placeholder='Name*'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Mobile Number*'
                    value={mobile}
                    onChangeText={(text) => setMobile(text)}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='WhatsApp Number'
                    value={whatsapp}
                    onChangeText={(text) => setWhatsapp(text)}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='PV Capacity*'
                    value={pvCapacity}
                    onChangeText={(text) => setPvCapacity(text)}
                />

                {/* Countries */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}>
                            {country ? country.name : "Select Country"}
                        </Text>

                        <Icon name='caretdown' size={15} color={'#000000'} />

                    </View>

                </TouchableWithoutFeedback>

                {/* States */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}>
                            {state ? state.name : "Select an State"}
                        </Text>

                        <Icon name='caretdown' size={15} color={'#000000'} />

                    </View>
                </TouchableWithoutFeedback>

                {/* Cities */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}>
                            {city ? city.name : "Select an City"}
                        </Text>

                        <Icon name='caretdown' size={15} color={'#000000'} />

                    </View>
                </TouchableWithoutFeedback>

                {/* Separator Container */}
                <View style={styles.separatorContainer}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.floatingText}> OR </Text>
                    <View style={styles.separatorLine} />
                </View>

                {/* Districts */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}>
                            {district ? district.name : "Select an District"}
                        </Text>

                    </View>
                </TouchableWithoutFeedback>

                {/* Talukas */}
                <TouchableWithoutFeedback
                    onPress={() => sheetRef.current?.expand()}
                >
                    <View style={styles.textInput}>

                        <Text style={styles.selectedText}>
                            {taluka ? taluka.name : "Select an Taluka"}
                        </Text>

                    </View>
                </TouchableWithoutFeedback>

                <Button
                    style={styles.btn}
                    mode='elevated'
                    textColor='#FFFFFF'
                    labelStyle={{ fontSize: 18 }}
                    onPress={() => sheetRef.current?.close()}
                >Create Lead</Button>

            </ScrollView>

            <BottomSheet
                style={{ padding: 4 }}
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
                    style={styles.btn}
                    textColor='#FFFFFF'
                    onPress={() => sheetRef.current?.close()}
                >Clear</Button>

            </BottomSheet>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 6,
        marginVertical: 8
    },
    btn: {
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: "#FAD02E",
        fontWeight: 'bold',

    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    textInput: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        fontSize: 18,
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 8,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'lightgray',
      },
      floatingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10, 
      },
    selectedText: {
        fontSize: 18,
    },
    selectedItemContainer: {
        marginTop: 20,
    }
})