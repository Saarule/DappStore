import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './components/screens/HomeScreen'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await this._loadAssets()
  }

  async _loadAssets() {
    await Font.loadAsync({
      "avenir-next": require('./assets/fonts/AvenirNextLTPro-Regular.otf'),
    })
    console.log('fonts loaded!')
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <HomeScreen />
    );
  }
}
