import React, { Component } from 'react'
import { View } from 'react-native'
// Styles
import styles from './Styles/RegisterStyles'
import { Container, Header, Body, Left, Icon,Text } from 'native-base'
export default class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: ''
        }
    }


    render() {
        return (
            <View style={styles.mainContainer}>


                <Container>
                    <Header>
                        <Left>
                        <Icon style={{color:'white'}} type="MaterialIcons" name="arrow-back">
                            </Icon>
                        </Left>
                        <Body><Text style={{color:'white'}}>Register Profile</Text></Body>
                    </Header>
                </Container>



            </View>
        )
    }
}
