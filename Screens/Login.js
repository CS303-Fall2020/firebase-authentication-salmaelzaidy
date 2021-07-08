import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';
import * as firebase from 'firebase'

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const OnLoginPress = () => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {

      }, (error) => {

        if (email == '' && password == '') {
          Alert.alert('ERROR', 'invalid credential!', [
            { text: 'DISSMIS' }
          ]);
        } else {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)

            if (error.message == 'The email address is badly formatted.') {
              Alert.alert('auth/invalid-email', error.message,
                [{ text: 'Dismiss' }]);
            } else if (error.message == 'The password is invalid or the user does not have a password.') {
              Alert.alert('auth/wrong-password', error.message,
                [{ text: 'Dismiss' }]);
            } else if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
              Alert.alert('auth/user-not-found', error.message,
                [{ text: 'Dismiss' }]);
            } else {
              Alert.alert('auth/network-request-failed', error.message, [
                { text: 'DISMISS' }
              ])
            }
          }, 500)
        }

      })
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()

    }}>
      <View style={styles.container}>
        <View style={styles.form}>
          {loading ? <ActivityIndicator style={{ marginTop: 130 }} size="large" /> :

            <View>

              <TextInput style={styles.input} placeholder="Your email"
                value={email} onChangeText={(text) => setEmail(text)} underlineColorAndroid={'transparent'} />
              <TextInput style={styles.input} placeholder="Your password"
                value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} underlineColorAndroid={'transparent'} />
              <Button title='Login' style={styles.button} onPress={() => OnLoginPress()} />
              <Button title='Forget Password' style={styles.button} onPress={() => navigation.navigate('Forget password')} />
            </View>
           
            
            }

<Button title='Signup if do not have an email' onPress={()=> navigation.navigate('Signup')}
/>

          
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  
  
  input: {

    height: 40,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'

  },
 
  form: {

    marginTop: 80,

  },
 

  button: {

    alignItems: 'center',
    
    
    
  },


});






























/*import React from 'react';
import {
        View,
        Text,
        Alert,
        Button,
        TextInput,
        StyleSheet,
        ActivityIndicator, } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function login({navigation}) {

const Login = ({ navigation }) => {
        const [isFetching, setIsFetching] = useState(false);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const useAlert = !!Alert.alert;

        const replaceRoute = (newRoute = '') => {
          navigation.dispatch(StackActions.replace(newRoute));
        };
        const login = () => {
          console.log('Trying to login');
          if (!email || !password) {
            useAlert
              ? Alert.alert('Error', 'Invalid credentials!', [{ text: 'Dismiss' }])
              : alert('Invalid credentials!');
          } else {
            setIsFetching(true);
            setTimeout(() => setIsFetching(false), 1000);
          }
        };






        return (
                <View style={styles.container}>
                  <View style={styles.container}>
                    {isFetching ? (
                      <ActivityIndicator size={60} />
                    ) : (
                      <>
                        <Text>Login</Text>
                        <TextInput
                          style={styles.input}
                          value={email}
                          onChangeText={setEmail}
                          placeholder="email"
                          textContentType="emailAddress"
                        />
                        <TextInput
                          style={styles.input}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="password"
                          textContentType="password"
                          secureTextEntry={true}
                        />
                        <Button color="blue" title="Login" onPress={login} />
                      </>
                    )}
                  </View>
                  <View style={styles.container}>
                    <Button
                      color="coral"
                      title="SignUp"
                      onPress={() => replaceRoute('SignUp')}
                    />
                    <Button
                      color="red"
                      title="Forgot Password"
                      onPress={() => replaceRoute('ForgotPassword')}
                    />
                  </View>
                </View>
              );
            };}

            const styles = StyleSheet.create({
              container: {
                flex: 1,
                padding: 10,
                justifyContent: 'space-evenly',
              },
              input: {
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                padding: 10,
              },
            });

            */