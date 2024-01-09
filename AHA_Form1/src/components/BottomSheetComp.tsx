import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler'


//There Are some steps in troubleShooting BottomSheet
// 1. add plugin to babel.config 
// 2. wrap the tsx inside <GestureHandlerRootView style={{ flex: 1 }}>

interface sampleData {
  id: string,
  title: string
}

const sampleData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
]

const {height,width} = Dimensions.get('screen')

const BottomSheetComp = () => {

  const sheetRef = useRef<BottomSheet>(null)

  const [selectedItem, setSelectedItem] = useState<sampleData>()
  const [textInputValue, setTextInputValue] = useState("")

  const openBottomSheet = () => {
    sheetRef.current?.expand()
  }

  const selectItem = (item: sampleData) => {
    setSelectedItem(item);
    setTextInputValue(item.title);
    sheetRef.current?.close();
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        selectItem(item)
        sheetRef.current?.close()
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <GestureHandlerRootView style={styles.outerContainer}>

      <View style={styles.container}>

        <TouchableWithoutFeedback
        onPress={openBottomSheet}
        >
          <View style = {styles.textInput}>
          <Text style = {styles.selectedText}> {selectedItem? selectedItem.title : "Select an Item"} </Text>
          </View>
        </TouchableWithoutFeedback>

        {selectedItem && (
          <View style={styles.selectedItemContainer}>
            <Text>Selected Item: {selectedItem.title}</Text>
          </View>
        )}

        <BottomSheet
          ref={sheetRef}
          style = {styles.bottomSheet}
          index={-1}
          snapPoints={['70%']}
        >

          <BottomSheetFlatList
            data={sampleData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />

        </BottomSheet>

      </View>

    </GestureHandlerRootView>
  )
}

export default BottomSheetComp

const styles = StyleSheet.create({
  outerContainer : {
    flex : 1
  },
  container: {
    flex : 1,
    padding : 8
  },
  bottomSheet : {
    
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  textInput: {
    height: 48,
    justifyContent : 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 8,
  },
  selectedText : {
    fontSize : 18,
  },
  selectedItemContainer: {
    marginTop: 20,
  },
})