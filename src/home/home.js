import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import {StackNavigator,createBottomTabNavigator,TabBarBottom} from 'react-navigation';
import { AsyncStorage } from "react-native";


export default class HomeScreen extends Component {
 constructor(props){
   super(props);
   this.state= {
     
   }
 }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Welcom Home</Text>
          <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Logout"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
        console.log("logout");
        
          AsyncStorage.setItem('user','null');
          var value=AsyncStorage.getItem('user');
    console.log("value");
    console.log(value);
          this.props.navigation.navigate('Home');
          
  }

  
}

// const a= createBottomTabNavigator(
//   // {
//   //   Home: { screen: HomeScreen },
//   //   Settings: { screen: SettingsScreen },
//   // }
//   // {
//   //   navigationOptions: ({ navigation }) => ({
//   //     tabBarIcon: ({ focused, tintColor }) => {
//   //       const { routeName } = navigation.state;
//   //       let iconName;
//   //       if (routeName === 'Home') {
//   //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//   //       } else if (routeName === 'Settings') {
//   //         iconName = `ios-options${focused ? '' : '-outline'}`;
//   //       }

//   //       // You can return any component that you like here! We usually use an
//   //       // icon component from react-native-vector-icons
//   //       return <Ionicons name={iconName} size={25} color={tintColor} />;
//   //     },
//   //   }),
//   //   tabBarComponent: TabBarBottom,
//   //   tabBarPosition: 'bottom',
//   //   tabBarOptions: {
//   //     activeTintColor: 'tomato',
//   //     inactiveTintColor: 'gray',
//   //   },
//   //   animationEnabled: false,
//   //   swipeEnabled: false,
//   // }
// );

const Nav=createBottomTabNavigator(

  {
    Home: { screen: HomeScreen },
    Settings: { screen: HomeScreen },
  });