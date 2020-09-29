import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card({ children, style }) {
  return <View style={[styles.containerStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 7.5,
    width: '80%',
  },
});

export { Card };
