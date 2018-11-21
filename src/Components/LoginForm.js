import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import  { Button, Card, CardSection, InputForm, Spinner  } from './Common';



class LoginForm extends Component{

    state = {email : '', password : '', error : '', loading : false};

    onButtonPress() {
         const {email, password} = this.state;

         this.setState({error :'', loading : true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.setSonLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.setSonLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
        });
    };

    onLoginSuccess() {
        this.setState({email:'', password:'', error:'', loading: true})
    };

    onLoginFail() {
        this.setState({email:'', password:'', error:'Authentication Failed', loading: true})
    };

    renderButton(){
       if(this.state.loading){
           return <Spinner size = "small"/>
       }

       return(
        <Button onPress = {this.onButtonPress.bind(this)}>
        Log In
       </Button>
       );
    };

    render() {
        return(
           <Card>

               <CardSection>
               <InputForm
               placeholder = 'eg@gmail.com'  
               label = 'Email'
               value = {this.state.email}
               onChangeText = {email => this.setState({email})}>
               </InputForm>
                   </CardSection>
               
               <CardSection>
               <InputForm
               secureTextEntry
               placeholder = 'Password'  
               label = 'Password'
               value = {this.state.password}
               onChangeText = {password => this.setState({password})}>
               </InputForm>

               </CardSection>

               <Text style ={styles.errorTextStyle}>
                   {this.state.error}
                   </Text>

               <CardSection>
                  {this.renderButton.bind(this)}
                   </CardSection>
               </Card>
        );
    }
}

styles = {
    errorTextStyle :{
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default LoginForm;
