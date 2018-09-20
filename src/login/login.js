import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import { AsyncStorage } from "react-native";


export default class LoginScreen extends Component {
 constructor(props){
   super(props);
   this.state= {
     username:null,
     password:null,
   }
 }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>LogIn</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(username)=>this.setState({username})} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(password)=>this.setState({password})}/>
            
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
           
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  componentWillUnmount() {
   
    
  }
  _loadInitialState=async () =>{

    var value=await AsyncStorage.getItem('user');
    console.log("value");
    console.log(value);
    if(value!=='null'){
      this.props.navigation.navigate('we');
    }else{
      this.props.navigation.navigate('Home');
    }
  }

  onLoginPress() {
    
    console.log("tauched");
   
      fetch("http://192.168.1.103:4000/mobile/login"
      ,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          name:this.state.username,
          password:this.state.password,
        })
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        console.log(responseJson.name);
        if(responseJson.status=='correct'){
          console.log("nevigate");
          AsyncStorage.setItem('user',responseJson.name);
          this.props.navigation.navigate('we');
        }else{
          alert("wrong password or username")
          console.log("do not navigate");
        }
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  
}