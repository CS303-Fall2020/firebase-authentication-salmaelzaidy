import React, { useState } from 'react';
import { StyleSheet, Text, TextInput , Button, View} from 'react-native';

export default function AddTodo({submitHandler})
{
    //save and set inputs
    const [text,settext]=useState('');
//track input field
    const changehandler =(val)=>{
settext(val);}

return(
    //input
    <View>
<TextInput style={styles.input}
placeholder='new todo'
onChangeText={changehandler}
/>
<Button onPress={()=> submitHandler(text)}  title='Add todo' color='coral'/>
</View>
)


}
const styles = StyleSheet.create({
input:{
marginBottom:10,
paddingHorizontal:8,
paddingVertical:6,
borderBottomWidth:1,
borderColor:'#bbb'
}
})



