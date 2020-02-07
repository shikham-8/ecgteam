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
import NativeTachyons from 'react-native-style-tachyons';
import { styles as s } from "react-native-style-tachyons";

const SIZE = 20;

class GraphScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            dataArray: Array(SIZE).fill(0),
        };
        this.clearData = this.clearData.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData(newData) {
        this.setState((prevState) => ({
          dataArray: [newData, ...prevState.dataArray]
        }))
    }

    clearData() {
        this.setState({
          dataArray: Array(SIZE).fill(0)
        })
    }


    render() { 
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2 // optional, default 3
        };

        const data = {
            datasets: [
              {
                data: this.state.dataArray.slice(0, SIZE - 1),
                color: (opacity = 1) => `#800000`, // optional
                strokeWidth: 2 // optional
              }
            ],
          };

        const screenWidth = Dimensions.get('window').width

        NativeTachyons.build({
          /* REM parameter is optional, default is 16 */
          rem: screenWidth > 340 ? 18 : 16,
          /* fontRem parameter is optional to allow adjustment in font-scaling. default falls back to rem */
          fontRem: 20
        }, StyleSheet);

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
            },
            contentContainer: {
              paddingTop: 30,
            },
            title: {
              alignItems: 'center',
              marginHorizontal: 50,
              paddingTop: 50,
              paddingBottom: 10,
            },
            titleText: {
              fontSize: 17,
              color: 'rgba(96,100,109, 1)',
              lineHeight: 24,
              textAlign: 'center',
            },
            buttonContainer: {
              //color: 'rgba(96,100,109, 1)',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignContent: 'center',
              marginLeft: 0.1*screenWidth,
              marginRight: 0.1*screenWidth,
              marginTop: 20,
            },
          });

        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    
                    <View style={styles.title}>
                        <Text style={[s.f4, s.b]}>
                            Sinus Rhythm
                        </Text>
                    </View>
                    <View>
                        <LineChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withShadow={false}
                        withDots={false}
                        withInnerLines={false}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="New Data"
                            onPress={() => this.updateData(Math.random()*1000)}
                        />
                        <Button
                            title="Reset"
                            onPress={this.clearData}
                        />
                        <Button 
                            title="Stop and Save"
                            color='#800000'
                            type='raised'
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default GraphScreen;