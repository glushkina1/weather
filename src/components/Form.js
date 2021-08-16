import React from "react";
import { View, StyleSheet, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Form = ({ search, onSetSearch, onSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
                 placeholder="Enter city name..."
                 value={search}
                 onChangeText={(val) => onSetSearch(val)} />

      <Icon name="search-outline" size={30} color="grey" onPress={onSubmit} style={styles.icon}/>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f1f1",
    flexDirection:'row',
  },
  input: {
    width:'88%',
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
  icon:{
    marginTop:10,
    marginLeft: 15,
  },
});

export default Form;

