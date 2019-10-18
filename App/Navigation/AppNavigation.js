import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import styles from './Styles/NavigationStyles'
import RegisterScreen from '../Containers/RegisterScreen'
import DataScreen from '../Containers/DataScreen'
import DataDetailScreen from '../Containers/DataDetailScreen'
// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  DataScreen: { screen: DataScreen },
  DataDetailScreen: { screen: DataDetailScreen },
  
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
