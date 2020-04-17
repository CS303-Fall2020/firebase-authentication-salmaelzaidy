import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import forgetpassword from '../Screens/ForgotPassword';
import signup from '../Screens/Signup';
import login from '../Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, TextInput , StyleSheet,FlatList, TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

export default function Auth() {
  

  return (

       <Stack.Navigator initialRouteName="Login" >
       <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Signup" component={signup} />
      <Stack.Screen name="Forget password" component={forgetpassword} />
      </Stack.Navigator>

    
  );
}

