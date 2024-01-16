import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import GetLocation, { Location } from 'react-native-get-location'
import Geocoder from 'react-native-geocoding'

const API_KEY = ''

Geocoder.init(API_KEY)

interface selectedPlace {
  name: string,
}

//Taking Address From Draggable Marker
const handleMarkerDragEnd = async (e: { nativeEvent: { coordinate: LatLng } }) => {
  const { latitude, longitude } = e.nativeEvent.coordinate;

  try {
    const response = await Geocoder.from({ latitude, longitude })
    const address = response.results[0].formatted_address;

    console.log(address)
  }
  catch (error) {
    console.error('Error getting location name:', error)
  }

}

export default function GoogleMapsScreen() {

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState<selectedPlace>({ name: '' })

  const [currentLocation, setCurrentLocation] = useState<Location>()

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setCurrentLocation(location)
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message)
      })
  }, [])

  const DetailPopUp = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>Place Name: {selectedPlace.name}</Text>
            <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    );
  };

  const handlePlacePress = (data: any) => {
    setSelectedPlace({ name: data.description })
    setModalVisible(true);
  };


  return (

    <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: currentLocation?.latitude || 0,
          longitude: currentLocation?.longitude || 0,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
      >

        <Marker draggable
        coordinate={{
          latitude: currentLocation?.latitude || 0,
          longitude: currentLocation?.longitude || 0
        }}
        onDragEnd={handleMarkerDragEnd}
        />

      </MapView>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            handlePlacePress(data)
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: '#fff',
              paddingHorizontal: 16,
              borderRadius: 40,
              elevation: 8
            },
            textInput: {
              height: 40,
              color: '#5d5d5d',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
      </View>

      <DetailPopUp />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  alertText: {
    fontSize: 18,
    marginBottom: 10,
  },
})