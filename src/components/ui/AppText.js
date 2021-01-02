import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AppText = (props) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});
