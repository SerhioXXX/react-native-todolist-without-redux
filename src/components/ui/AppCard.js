import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    // borderWidth: 2,
    // borderColor: 'green',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#fff',
    elevation: 8, // задает тени для Android
    borderRadius: 10,
  },
});
