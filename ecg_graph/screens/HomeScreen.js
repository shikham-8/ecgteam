import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';
import DynamicGraph from '../components/Graph'

export default function HomeScreen() {

  const addData = () => {
    DynamicGraph.updateData(Math.random()*50);
  };

  const resetData = () => {
    DynamicGraph.clearData();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>


        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Heyyoooo
          </Text>
        </View>
        <DynamicGraph/>
        <View>
          <Button
            title="New Data"
            style={styles.button}
            onPress={addData}
          />
          <Button
            title="Reset"
            onPress={resetData}
          />
          <Button 
            title="Save"
          />
        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: 50,
    paddingBottom: 10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
