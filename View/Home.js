import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Textarea, Container } from 'native-base';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      TextToConvertBin: '',
      TextToConvertHex: '',
      TextToConvertOct: '',
    };
  }
  StringToHexa = text => {
    let output = '';
    let numbers = '';
    let setHas = false;
    for (var i = 0; i < text.length; i++) {
<<<<<<< HEAD
      output += text[i].charCodeAt(0).toString(16) + ' ';
=======
      if (/^\d+$/.test(text[i].charCodeAt(0).toString())) {
setScanOn = true;
      }else{
        setScanOn = false;
      }
      if(setScanOn){
        for(var j = 0; i < )
      }
      output += text[i].charCodeAt(0).toString(2) + ' ';
>>>>>>> eab8580175c77cd95621a983dcdea9594fdd7743
    }
    this.setState({ TextToConvertHexa: output });
  };

  StringToBin = text => {
    let output = '';
    /* for (var i = 0; i < text.length; i++) {
    //   output += text[i].charCodeAt(0).toString(16) + ' ';
     }*/

    if (isNaN(text)) {
      for (var i = 0; i < text.length; i++) {
        output += text[i].charCodeAt(0).toString(2) + ' ';
      }
    } else {
      let temp = parseInt(text, nbr);
      output = (temp >>> 0).toString(2);

    }

    this.setState({ TextToConvertBin: output });
  };
  StringToOcta = text => {
    let output = '';
    for (var i = 0; i < text.length; i++) {
      output += text[i].charCodeAt(0).toString(8) + ' ';
    }
    this.setState({ TextToConvertOct: output });
  };
  componentDidMount() { }
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
