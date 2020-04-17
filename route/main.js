import * as React from 'react';
import { Button, View, Text, TextInput , StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import home from '../components.js/home.js';


function DetailsScreen() {

    //save and set inputs
   const [text,settext]=useState('');
   
   //track input field
       const Changehandler =(val)=>{
  
   settext(val);}
   
  const submit=(text)=>{settext((prevtext) => [
    { text: text, key: Math.random().toString() }, ...prevtext]
  )}
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      
  <TextInput style={styles.input}
  placeholder='todo details ..'
  onChangeText={Changehandler}
  multiline={true}
  />
  <TouchableOpacity>
  <Button onPress={()=>  submit(text)} title='Add details' color='coral'/>
   </TouchableOpacity>
  <View style={{marginTop:16,
      borderColor:'#bbb',
      borderWidth:2,
  
      
      }}>
  <FlatList
  data={text}
    renderItem={({ item }) => ( <Text>{item.text}</Text> )
  }
  />
  </View></View>
  );
  }

const Stack = createStackNavigator();

export default function Main() {
  

  return (
  
       
       
       
       <Stack.Navigator >
    <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Details" component={DetailsScreen} />
     
    </Stack.Navigator>

    
  );
}

