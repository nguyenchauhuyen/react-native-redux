import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
// import { red } from 'ansi-colors';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator } from 'react-navigation-tabs';
import RepoList from './src/containers/RepoList';
import RepoDetail from './src/containers/RepoDetails';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const Tabs = createTabNavigator({
  RepoList: {
    screen: RepoList
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: RepoList
  },
  Detail: {
    screen: RepoDetail
  }
}, {
});

const AppContainer = createAppContainer(Stack)

export default class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});