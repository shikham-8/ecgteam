import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Switch,
    ToastAndroid
}   from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial'

export default class App extends Component<{}> {
    constructor (props) {
        super(props)
        this.state = {
            isEnabled: false,
            discovering: false,
            devices: [],
            unpairedDevices: [],
            connected: false,
        }
    }
    componentWillMount(){
        Promise.all([
           BlueetoothSerial.isEnabled(),
           BluetoothSerial.list() 
        ])
        .then((values) => {
            const [ isEnabled, devices ] = values
            this.setState({ isEnabled, devices })
        })

        BluetoothSerial.on('bluetoothEnabled', () => {

            Promise.all[(
                BluetoothSerial.isEnabled(),
                BluetoothSerial.list()
            )]
            .then((values) => {
                const [ isEnabled, devices ] = values
                this.setState({ devices })
            })
            BluetoothSerial.on('bluetoothDisabled', () => {
                this.setState({devices: []})
            })
            BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
        })
    }

    _renderItem(item){
        return(<View style={StyleSheet.deviceNameWrap}>
            <Text style={StyleSheet.deviceName}>{item.item.name}</Text>
        </View>)
    }
    enable() {
        BluetoothSerial.enable()
        .then((res) => this.setState({ isEnabled: true }))
        .catch((err) => Toast.showShortBottom(err.message))
    }
}