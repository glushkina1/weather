import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";


const WeatherData = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  return (
      <ScrollView style={styles.container}>
        <View style={styles.box}>
        <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
          <Image style={styles.image}
                 source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>temperature</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{data.main.temp}K</Text>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 40,
  },
  tempContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
});

export default WeatherData;
