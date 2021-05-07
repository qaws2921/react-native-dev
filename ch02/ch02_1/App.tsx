/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';

export default function App() {
  console.log('App called')
  const text = React.createElement(Text, null, 'Hello world!');
  return text;
}
