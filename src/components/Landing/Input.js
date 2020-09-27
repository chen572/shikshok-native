import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

function Input({label, value, onChangeText, placeholder, secureTextEntry}) {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        // value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 3,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Input};
