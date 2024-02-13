import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'

export default function PDF_Reader() {

    const source = {uri: 'https://cdn2.hubspot.net/hubfs/2073800/Premium_Content/ebook_8WeekShred.pdf', cache: true}

  return (
    <View style={styles.container}>
                <Pdf
                    trustAllCerts={false}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})