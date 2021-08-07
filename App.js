import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  function buttonIncrement(){
    setCount(count+1)
  }

  function encouragingText(){
    if (count >= 20) {
      return 'Almost there!!!'
    } else if (count >= 10) {
      return 'Keep going!!!'
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>{count}</Text>
      <Button title='Increment' onPress={buttonIncrement}></Button>
      <Button title='Decrement' onPress={() => setCount(count-1)}></Button>

      <TouchableOpacity style={styles.resetButton} onPress={ () => setCount(0)}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <Text>{encouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  resetButtonText:{
    color: 'blue',
  },
});