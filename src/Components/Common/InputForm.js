import React from 'react';
import {TextInput, Text, View} from 'react-native';

const InputForm = ({label, value, onChangeText, placeholder, secureTextEntry }) =>{

    return ( 
      <View style={Styles.ContainerStyle} >
          <Text style={Styles.TextStyle}>{label}</Text>
          <TextInput
              secureTextEntry = {secureTextEntry}
              placeholder = {placeholder}
              autoCorrect= {false}
              value = {value}
              onChangeText = {onChangeText}
              style= {Styles.TextInputStyle} >
              </TextInput>
      </View>
    );
};


Styles ={
    
        TextInputStyle:{
            flex: 2,
            fontSize: 16,
            color:'#000',
            lineHeight: 23,
            paddingLeft:5,
            paddingRight:5
        },
        TextStyle:{
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            color:'#000'

        },

        ContainerStyle:{
            height:40,
            flex:1,
            flexDirection:'row',
            alignItems: 'center'
        }
       
    }

export { InputForm }