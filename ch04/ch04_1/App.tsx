/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect, useState} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
 } from 'react-native';
 import {useClock} from './src/hooks'

 export default function App() {
    const time = useClock();
    
   return (
     <SafeAreaView style={styles.safeAreaView}>
       <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
       </Text>
       <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
     </SafeAreaView>
   )
 };
 const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50}
})
