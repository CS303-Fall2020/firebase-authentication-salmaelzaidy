import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView ,Alert
  , TouchableWithoutFeedback
  , Keyboard
  , CheckBox
  , AsyncStorage, ActivityIndicator} from 'react-native';
//import Home from './components.js/home.js';
import Todoitem from '../components.js/todoitem.js';
import AddTodo from '../components.js/AddTodo.js'





export default function Home({ navigation ,route}) {

  const [get, setGet] = useState(true)
  const [loading, setLoading] = useState(false);
  
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'read a book', key: '2' },
    { text: 'go out', key: '3' },


  ]);


  useEffect(() => {
    myAsyncEffect()
  }, []);


  useEffect(() => {
    AsyncStorage.setItem('todo', JSON.stringify(todos))
  })

  const displayData = async () => {
    const IntialTodo = await AsyncStorage.getItem('todo')
    const parsed = JSON.parse(IntialTodo)

    setTodos(parsed)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
    myAsyncEffect()
  }
  async function myAsyncEffect() {
    try {

      const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1&fbclid=IwAR2cMmTxqnOf5Nj5zEaycaN5PexzsfvBVUK5okTQUXmNJGk_osqJT8OwyQU")
      const data = await response.json();
      const item = data;

      setTodos(item)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 500)
      setGet(true)

    } catch (error) {
      console.log(error)
      setGet(false)
    }

  }



  const storeData = async () => {
    try {
      await AsyncStorage.setItem("items", JSON.stringify(todos));
      console.log(JSON.stringify(todos))
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  };
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('items');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };
  
  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => { if ((todo.key != key) == false) { todo.completed = !todo.completed } return true });
    })}
    
 
    storeData()
    retrieveData();
  
  const ay5ra = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    })
    storeData()
    retrieveData();
  }


  const PressUpdateHandler = (key, text) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => { if ((todo.key != key) == false) { todo.text = text } return true });
    })
  }



  
  const presshandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    })
  }

  const submitHandler =
   (text) => {
     if(text.lenght >3){
    setTodos((prevTodos) => [
      { text: text, key: Math.random().toString() }, ...prevTodos]
    )
  }
else{
  Alert.alert('OPPS!', 'Todo must be longer than 3 chars',[
    {text:'Dismiss', onPress:()=>console.log('alret closed')}
  ]);
}
}



  return (
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log("Dismissed");
  }}>
    

    <View style={styles.container}>
       {get ?
            <View></View>
            : <TouchableOpacity onPress={() => displayData()}>
            <Text style={styles.text}>
              it seems you are offline, tab here or press refresh when you got connected
         </Text>
          </TouchableOpacity>

          }


      <Text style={styles.title}>My todos</Text>

      <View style={styles.content}>

        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Todoitem item={item} presshandler={presshandler} navigation={navigation} pressHandler={pressHandler} />
              
              
           
            )}
          
          />
          {get ?
                <Button onPress={() => myAsyncEffect()} title='Click to refresh' color='coral' />
                : <Button onPress={() => displayData()} title='Click to refresh' color='coral' />

              }

        </View>
      </View>
    </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: 410,
    padding: 40,
    backgroundColor: 'coral',
    marginBottom: 10,

  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text1: {
    color: 'black',
    fontSize: 20,
  },
  content: {
    padding: 40,
    marginTop: 50

  },
  list: {
    marginTop: 50
  },

  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  

  itemText: {
    marginLeft: 10,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',

  }, t: {
    marginLeft: 10,
    textDecorationLine: "line-through",
    flexShrink: 1
  }, f: {
    marginLeft: 10,
    textDecorationLine: "none",
    flexShrink: 1
  }, c: {
    marginLeft: 20,

  },
  re: {
    justifyContent: 'center',
    padding: 150
  },
  text: {
    backgroundColor: 'yellow'
  }
});


