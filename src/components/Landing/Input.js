import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Card } from './Card';

function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}) {
  const { inputStyle, containerStyle } = styles;
  return (
    <Card>
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={placeholder}
          // value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          keyboardType={keyboardType}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 1,
  },
  containerStyle: {
    height: 50,
    width: '100%',
  },
});

export { Input };
