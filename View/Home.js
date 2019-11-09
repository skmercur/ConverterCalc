import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Textarea, Container} from 'native-base';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextToConvert: '',
    };
  }
  StringToBin = text => {
    let output = '';
    for (var i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(2) + ' ';
    }
    this.setState({TextToConvert: output});
  };
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Text>{this.state.TextToConvert}</Text>
        <Textarea
          rowSpan={20}
          onChangeText={text => {
            this.StringToBin(text);
          }}
          bordered></Textarea>
      </Container>
    );
  }
}
