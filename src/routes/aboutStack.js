import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../components/Header';
import Profile from '../screens/Profile';

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => <Header title='My Profile' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  // defaultNavigationOptions: {
  //   headerTintColor: '#444',
  //   headerStyle: { backgroundColor: '#eee', height: 60 },
  // }
});

export default AboutStack;