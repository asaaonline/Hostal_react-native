/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import home from './src/home/home';
import Login from './src/login/login';

const Application=createStackNavigator({
  Home:{screen:Login},
  main:{screen:home},
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
)

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <Application />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
