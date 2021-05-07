import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App() {
  // const isLoading = true
  // const children = [
  //   <Text>Hello JSX world!</Text>,
  //   <Text>Hello JSX world!</Text>,
  //   <Text>Hello JSX world!</Text>
  // ]
  // if  (isLoading) {
  //   return (
  //     <SafeAreaView>
  //       {children}
  //     </SafeAreaView>
  //   )
  // }
  // const children = [1, 2, 3].map((i) => <Text>Hello world! {i}</Text>)
  // return <SafeAreaView>{children}</SafeAreaView>

  const children = new Array(100).fill(null)
  .map((notUsed, index) => <Text>Hello world! {index}</Text>)

  return <SafeAreaView>{children}</SafeAreaView>
}