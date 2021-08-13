import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from "react-native";


const WeatherData = ({ data }) => {
  const fehrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  console.log(data? data.name : 'waiting')
  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
        <Text styles={styles.title}>
          {data.name} - {data.sys.country}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WeatherData;
