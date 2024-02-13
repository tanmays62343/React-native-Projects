import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PDF_Reader from './components/PDF_Reader'
import DOC_Reader from './components/DOC_Reader'

//"https://cdn2.hubspot.net/hubfs/2073800/Premium_Content/ebook_8WeekShred.pdf"
//https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls
//https://www.unm.edu/~unmvclib/powerpoint/pptexamples.ppt

export default function App() {

  var PDF_URL = "https://cdn2.hubspot.net/hubfs/2073800/Premium_Content/ebook_8WeekShred.pdf"
  var EXCEL_URL = "https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls"
  var PPT_URL = "https://www.unm.edu/~unmvclib/powerpoint/pptexamples.ppt"

  return (
    <SafeAreaView style = {styles.container}>
      
      {/* <PDF_Reader /> */}
      <DOC_Reader name='PDF' documentUrl={PDF_URL}/>
      <DOC_Reader name='EXCEL' documentUrl={EXCEL_URL}/>
      <DOC_Reader name='PPT' documentUrl={PPT_URL}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'flex-end',
    flexDirection : 'row'
  }
})