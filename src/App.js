import React, {Component} from 'react';
import {View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component{


    initializeFirebase() {
        const firebase = require("firebase");
      
        // Initialize Firebase
        var config = {
            'apiKey': 'AIzaSyAuWX7xGl2Wcuky6fPPB0TVcBNYZtKQ9XU',
            'authDomain': 'authentication-3efa0.firebaseapp.com',
           'databaseURL': 'https://authentication-3efa0.firebaseio.com',
            'projectId': 'authentication-3efa0',
            'storageBucket': 'authentication-3efa0.appspot.com',
            'messagingSenderId': '812553140798'
        };
        firebase.initializeApp(config);
      
      }
      
      componentWillMount() {
        this.initializeFirebase();
      }

    render(){
        return(
            <View>
                <Header headertext= {'Authentication'}>An app </Header>
                <LoginForm/>
            </View>
        );
    };
};

export default App;
