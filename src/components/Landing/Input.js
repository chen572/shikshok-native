import React from 'react';
import { TextInput, View } from 'react-native';
import { Card } from './Card';
import styles from './styles';

function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
}) {
  const { inputStyle, containerStyle } = styles;
  return (
    <Card style={error && styles.errorInputBorder}>
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          keyboardType={keyboardType}
        />
      </View>
    </Card>
  );
}

export { Input };
