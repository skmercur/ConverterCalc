import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import Splash from './View/Spalsh';
import Home from './View/Home';
class App extends Component {
  render() {
    enableScreens();
    return <Splash></Splash>;
  }
}
const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        title: 'SplashScrean',
        headerLeft: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'MyScreen',
        headerLeft: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
