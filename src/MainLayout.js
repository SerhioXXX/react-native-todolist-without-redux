import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { GooglePlacesInput } from './GooglePlacesInput';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { GooglePlacesInputWithRef } from './GooglePlacesInputWithRef';
import { THEME } from './theme';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <>
      <View style={styles.wrapper}>
        <Navbar title="Todo App!"></Navbar>
        <View style={styles.container}>
          {todoId ? <TodoScreen /> : <MainScreen />}
        </View>
      </View>
      <GooglePlacesInput />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
});
