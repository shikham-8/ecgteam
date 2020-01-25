import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

class DynamicGraph extends Component {
    
    updateData(newData) {
        dataArr = [newData, ...dataArr];
        this.setState({data: [ dataArr ]})
    }

    clearData() {
        dataArr = Array(SIZE).fill(0);
        this.setState({data: [ dataArr ]})
    }

    render() {    
        const SIZE = 50;
        var dataArr = Array(SIZE).fill(0);

        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2 // optional, default 3
        };
        
        const data = {
            datasets: [{
              data: dataArr.slice(0, SIZE - 1),
              //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };

        const screenWidth = Dimensions.get('window').width

        return (
            <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            withShadow={false}
            withDots={false}
            withInnerLines={false}
            />
        );
    }
}

export default DynamicGraph;