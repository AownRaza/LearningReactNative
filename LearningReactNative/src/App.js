/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Login } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation';
import { Provider } from 'react-redux';
import { store } from './redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.appContainer}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>


  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

export default App;
