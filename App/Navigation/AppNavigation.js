import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import styles from './Styles/NavigationStyles'
import RegisterScreen from '../Containers/RegisterScreen'
import DataScreen from '../Containers/DataScreen'
import DataDetailScreen from '../Containers/DataDetailScreen'
import { Icon } from 'native-base'
import { StyleSheet, Text, View, Button } from 'react-native';


// Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   LaunchScreen: { screen: LaunchScreen },
//   LoginScreen: { screen: LoginScreen },
//   RegisterScreen: { screen: RegisterScreen },
//   DataScreen: { screen: DataScreen },
//   DataDetailScreen: { screen: DataDetailScreen },

// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'LaunchScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

export default createMaterialBottomTabNavigator({
  LaunchScreen: {
    screen: LaunchScreen, navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} source="FontAwesome" name="search" />
        </View>),

    }
  },
  RegisterScreen: {
    screen: RegisterScreen, navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} source="AntDesign" name="home" />
        </View>),

    }
  },
  LoginScreen: {
    screen: LoginScreen, navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} source="MaterialIcons" name="lock" />
        </View>),

    }
  },

}, {
  initialRouteName: 'RegisterScreen',
  activeColor: 'red',
  inactiveColor: 'black',
  barStyle: { backgroundColor: 'white' },


})
// export default createAppContainer(BottomNav)
