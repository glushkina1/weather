import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {getWeather} from "./store/actions/weatherAction";
import Form from "./components/Form";
import Weather from "./components/Weather"

const App = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather)


  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [{text:'OK'}]);
    }
    setLoading(true);
    dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
     <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler}/>
      <Weather loading={loading} data={data} error={error}/>
    </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
