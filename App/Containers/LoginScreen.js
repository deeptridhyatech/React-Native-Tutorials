import React, { Component } from 'react'
import { View,AsyncStorage} from 'react-native'
// Styles
import styles from './Styles/LoginStyles'
import { Form, Item, Input, Label, Button, Text } from 'native-base'
import axios from 'axios';
export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  doLogin = () => {
    const { email, password } = this.state;
    axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
      .then((response) => {
        if(response.status===200){
          console.log(response)
          alert(response.data.token)
          AsyncStorage.setItem('token',response.data.token);
        }
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>



        {/* <Container>
          <Header >
            <Body ><Text style={{textAlign:'center',color:'white'}}>Login</Text></Body>
            <Right></Right>
          </Header>
        </Container> */}

        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input onChangeText={email => this.setState({ email })} />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input onChangeText={password => this.setState({ password })} />
          </Item>

          <Button style={{ margin: 10 }} full onPress={() => this.doLogin()}>
            <Text style={{ color: 'white', }}>Login</Text>
          </Button>
        </Form>



      </View>
    )
  }
}
