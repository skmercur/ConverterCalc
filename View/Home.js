import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Textarea, Container} from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextToConvertBin: '',
      TextToConvertHex: '',
      TextToConvertOct: '',
    };
  }
  StringToBin = text => {
    let output = '';
    for (var i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(2) + ' ';
    }
    this.setState({TextToConvertBin: output});
  };
  StringToHexa = text => {
    let output = '';
    for (var i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(16) + ' ';
    }
    this.setState({TextToConvertHex: output});
  };
  StringToOcta = text => {
    let output = '';
    for (var i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(8) + ' ';
    }
    this.setState({TextToConvertOct: output});
  };
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Text>Bin : {this.state.TextToConvertBin}</Text>
        <Text>Hex : {this.state.TextToConvertHex}</Text>
        <Text>Oct : {this.state.TextToConvertOct}</Text>
        <Textarea
          rowSpan={20}
          onChangeText={text => {
            this.StringToBin(text);
            this.StringToHexa(text);
            this.StringToOcta(text);
          }}
          bordered></Textarea>
      </Container>
    );
  }
}
