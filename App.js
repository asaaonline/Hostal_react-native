/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,createBottomTabNavigator} from 'react-navigation';
import home from './src/home/home';
import Login from './src/login/login';
import SettingsScreen from './src/settings/setting';

const Application=StackNavigator({

  loginFlow: { 
    screen: StackNavigator({
      Home: { screen: Login },
      main: { screen:createBottomTabNavigator({
              we:{screen:home},
              setting:{screen:SettingsScreen}
      })
      
      },
    },{
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
    )
  }
}
,{
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
