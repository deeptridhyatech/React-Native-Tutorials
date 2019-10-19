import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
// Styles
import styles from './Styles/LoginStyles'
import { Form, Item, Input, Label, Button, Text, Container, Content, Left, Right, Body, Header, Icon } from 'native-base'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
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
        if (response.status === 200) {
          console.log(response)
          alert(response.data.token)
          AsyncStorage.setItem('token', response.data.token);
        }
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>




        <Container>
          <Header>
            <Left>
              <Icon style={{ color: 'white' }} type="MaterialIcons" name="menu">
              </Icon>
            </Left>
            <Body><Text style={{ color: 'white' }}>Login</Text></Body>
          </Header>

          <ScrollView>

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


          </ScrollView>

        </Container>
      </View>
    )
  }
}
