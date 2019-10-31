import React, { Component } from 'react'
import { Text, View, ActionSheetIOS, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import { Button, ActionSheet } from 'native-base'
import LoginScreen from './LoginScreen'
import { AsyncStorage } from 'react-native';
import { Container, Header, Body, Left, Icon, Right } from 'native-base'
// Styles
import styles from './Styles/LaunchScreenStyles'
import { RNCamera } from 'react-native-camera';
import GetLocation from 'react-native-get-location'



export default class LaunchScreen extends Component {


  pickedMethod(params) {

    if (params === 1) {
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />

    } else if (params === 2) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          ToastAndroid.show("Latitude is " + location.latitude.toString() + " & Longitude is " + location.longitude, ToastAndroid.SHORT);
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
        })
    } else if (params === 5) {
      alert("JSON Listing")
    } else if (params === 6) {
      this.retriveToken();
    } else if (params === 7) {

    } else if (params === 8) {
      alert("Facebook Login")
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

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

        <Container>
          <Header >
            <Left>
              <Icon style={{ color: 'white' }} type="MaterialIcons" name="menu">
              </Icon>
            </Left>
            <Body><Text style={{ color: 'white' }}>Dashboard</Text></Body>

            <Right>
              <Icon style={{ color: 'white' }} type="MaterialIcons" name="account-balance-wallet">
              </Icon>
            </Right>

          </Header>

          <ScrollView>

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
          </ScrollView>
        </Container>
      </View>
    )
  }
}
