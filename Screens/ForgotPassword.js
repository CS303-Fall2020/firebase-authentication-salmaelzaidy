import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import * as firebase from "firebase";
export default function ForgetPassword({ navigation }) {
        const [email, setEmail] = useState('')
        const [reset, setReset] = useState(false)
        const OnRetrivePassword = () => {
                firebase.auth().sendPasswordResetEmail(email)
                        .then(() => {
                                setReset(true)

                        }, (error) => {

                                if (email == '') {
                                        Alert.alert('ERROR', 'invalid credential!', [
                                                { text: 'DISSMIS' }
                                        ]);
                                } else {
                                        if (error.message == 'The email address is badly formatted.') {
                                                Alert.alert('auth/invalid-email', error.message,
                                                        [{ text: 'Dismiss' }]);
                                        } else if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                                                Alert.alert('auth/user-not-found', error.message,
                                                        [{ text: 'Dismiss' }]);
                                        } else {
                                                Alert.alert('auth/network-request-failed', error.message, [
                                                        { text: 'DISMISS' }
                                                ])
                                        }
                                }

                        })
        }
        return (
                <TouchableWithoutFeedback onPress={() => {
                        Keyboard.dismiss()
                }}>
                        <View style={styles.container}>
                                <View style={styles.form}>



                                        <TextInput style={styles.input} placeholder="Your email"
                                                value={email} onChangeText={(text) => setEmail(text)} underlineColorAndroid={'transparent'} />
                                        {reset ? <Text style={styles.btntext}>Email was sent successfully. please follow instructions to reset your password.</Text> : console.log()}
                                        <Button title='Reset password' onPress={() => OnRetrivePassword()}/>
                                                
                                       
                                   < Button title='Login' onPress={() => navigation.navigate('Login')} />
                                                
                                        <Button title='Signup' onPress={() => navigation.navigate('Signup')} />
                                               
                                        

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
        form: {

                marginTop: 80,

        },
        button: {
                alignItems: 'center',

        },

        input: {

                height: 40,
                marginBottom: 10,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd'

        },
       

        
        btntext: {

                fontWeight: 'bold',

        }
        ,
        
        
        
});