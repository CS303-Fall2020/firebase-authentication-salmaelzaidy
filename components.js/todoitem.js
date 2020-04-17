import React from 'react';
import { StyleSheet, Text, TouchableOpacity ,Button,CheckBox, View} from 'react-native';
import Home from'../components.js/home';


export default function Todoitem({item, presshandler,navigation, pressHandler,}) {

    

return(
    <View style={styles.item}>
    <TouchableOpacity onPress={()=>presshandler(item.key)}>
        
        <Text > {item.text} 
        </Text>
        
        </TouchableOpacity>
        <TouchableOpacity><CheckBox style={styles.box} value={item.completed} onChange={() => pressHandler(item.key)} /></TouchableOpacity>
   
        <Button title="details" onPress={() => navigation.navigate('Details')} />
        
    </View>
)



}
const styles = StyleSheet.create({
item:{
    paddingHorizontal:10,
    paddingVertical:12,

    marginTop:16,
    borderColor:'#bbb',
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:5
},

box: {
    marginLeft: 20,
    marginTop:10,
    
}

})