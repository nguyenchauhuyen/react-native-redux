  
import { createStackNavigator } from 'react-navigation-stack';
// import React from 'react';
// import Header from '../shared/header';
import Home from '../screens/RepoList';
import RepoDetails from '../screens/RepoDetails';

const screens = {
  Home: {
    screen: Home,
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     headerTitle: () => <Header title='GameZone' navigation={navigation} />
    //   }
    // },
  },
  RepoDetails: {
    screen: RepoDetails,
    navigationOptions: {
      title: 'Repository Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee'}
  }
});

export default HomeStack;