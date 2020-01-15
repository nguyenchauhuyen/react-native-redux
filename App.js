import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
// import { red } from 'ansi-colors';

import Navigator from './src/routes/drawer';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

export default class App extends React.Component {
  render() {
    return <Navigator />
  }
}