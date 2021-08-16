import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeatherData from "./WeatherData";

const Weather = ({ loading, data, error }) => {
  if (error) {
    return <View style={styles.container}>
      <Text style={styles.error}>There is no such city. Please try again</Text>
    </View>;
  }

  if (!loading && !data) {
    return null;
  }
  return (
    <View>
      {loading? <ActivityIndicator size='large' color ='#00d1b2'/> : <WeatherData data={data}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  error: {
    color: "#FA8072",
    fontSize: 15,
    textAlign: "center",
  },
});


export default Weather;
