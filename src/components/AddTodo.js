import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Название не может быть пустым');
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        //onChangeText={(text) => setValue(text)}
        onChangeText={setValue}
        value={value}
        placeholder="Введи title"
        autoCorrect={false} // убираем корректирование
        autoCapitalize="none"
      />
      {/* <AntDesign.Button onPress={pressHandler}>Добавить</AntDesign.Button> */}
      <AntDesign.Button
        onPress={pressHandler}
        name="pluscircleo"
        size={24}
        color="black"
      >
        Добавить
      </AntDesign.Button>
      {/* <Button title="Добавить" onPress={pressHandler} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    borderStyle: 'solid',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
