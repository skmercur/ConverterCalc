import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 5000);
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
