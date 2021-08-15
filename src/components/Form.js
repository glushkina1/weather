import React from "react";
import { View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-ionicons'

const Form = ({ search, onSetSearch, onSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
                 placeholder="Enter city name..."
                 value={search}
                 onChangeText={(val) => onSetSearch(val)} />

      <Icon name='rocket' size={30} color="black" onPress={onSubmit} />
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f1f1",
  },
  input: {
    borderWidth:1,
    borderColor: '#dbdbdb',
    borderRadius:4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal:10,
    fontSize: 16,
    marginTop:10,
  },
});

export default Form;

