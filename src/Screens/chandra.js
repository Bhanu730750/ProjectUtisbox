import React from 'react';
import {Text, View, TextInput} from 'react-native';
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Handle Text Input</Text>
      <TextInput placeholder="Enter your Name" style={{fontStyle: 15}} />
    </View>
  );
};

export default App;
