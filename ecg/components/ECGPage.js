import React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundColor: "#ffffff",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "0",
    stroke: "#000000"
  }
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

export default class ECGPage extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>ECG Page!</Text>
          <LineChart
            data={data}
            width={screenWidth} // from react-native
            height={220}
            yAxisLabel={"$"}
            yAxisSuffix={"k"}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      );
    }
}