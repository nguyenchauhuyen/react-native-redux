  
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../components/Header';
import Home from '../screens/RepoList';
import RepoDetails from '../screens/RepoDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => <Header title='Home T' navigation={navigation} />
      }
    },
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
  // defaultNavigationOptions: {
  //   headerTintColor: '#444',
  //   headerStyle: { backgroundColor: '#eee', height: 80},
  //   headerTitleStyle: { fontWeight: 'bold'}
  // }
});

export default HomeStack;