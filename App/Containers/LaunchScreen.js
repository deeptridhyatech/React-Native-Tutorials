import React, { Component } from 'react'
import { Text, View, ActionSheetIOS, ScrollView } from 'react-native'
import { Button, ActionSheet } from 'native-base'
import LoginScreen from './LoginScreen'
import { AsyncStorage } from 'react-native';
// Styles
import styles from './Styles/LaunchScreenStyles'


export default class LaunchScreen extends Component {


  pickedMethod(params) {
    if (params === 1) {
      alert("Upload Image")
    } else if (params === 2) {
      alert("Getting Location")
    } else if (params === 5) {
      alert("JSON Listing")
    } else if (params === 6) {
      this.retriveToken();
    } else if (params === 7) {
     
    } else if (params === 8) {
      alert("Facebook Login")
    }
  }

  retriveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        alert(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>


        <Button style={styles.buttonStyles} full onPress={() => this.pickedMethod(1)}>
          <Text style={{ color: 'white' }}>Upload Image</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => this.pickedMethod(2)}>
          <Text style={{ color: 'white' }}>Get Location</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => navigate('RegisterScreen')}>
          <Text style={{ color: 'white' }}>Register Profile</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => navigate('LoginScreen')}>
          <Text style={{ color: 'white' }}>Login API</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => navigate('DataScreen')}>
          <Text style={{ color: 'white' }}>JSON Listing</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => this.pickedMethod(6)}>
          <Text style={{ color: 'white' }}>Storage</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => this.pickedMethod(7)}>
          <Text style={{ color: 'white' }}>Google Login</Text>
        </Button>

        <Button style={styles.buttonStyles} full onPress={() => this.pickedMethod(8)}>
          <Text style={{ color: 'white' }}>Facebook Login</Text>
        </Button>




      </View>
    )
  }
}
