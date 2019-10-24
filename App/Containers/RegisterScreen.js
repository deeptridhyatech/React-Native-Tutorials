import React, { Component } from 'react'
import { View, Image } from 'react-native'
// Styles
import styles from './Styles/RegisterStyles'
import { Container, Header, Body, Left, Icon, Text, Right, Button } from 'native-base'


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
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left><Icon source="Feather" name="camera" /></Left>
                        <Body style={{ justifyContent: 'center', textAlign: 'center' }}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center' }}>Insatgram</Text>
                        </Body>
                        <Right>
                            <Icon style={{ paddingRight: 20 }} source="Feather" name="tv" />
                            <Icon style={{ transform: [{ rotate: '315deg' }] }} source="Feather" name="send" /></Right>
                    </Header>

                    <View>
                        <View style={{ height: 85, width: '100%' }}>

                            <View style={{ margin: 10, flex: 1, flexWrap: 'wrap' }}>
                                <View>
                                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={{ uri: 'https://tinyurl.com/yxvw68pf' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 6 }}>Your Story </Text>
                                </View>

                                <View>
                                    <Image style={{ width: 55, height: 55, borderRadius: 55 / 2, marginLeft: 10, borderColor: 'red', borderWidth: 1 }} source={{ uri: 'https://tinyurl.com/y476lg5q' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 3 }}>Aditya Patel </Text>
                                </View>

                                <View>
                                    <Image style={{ width: 55, height: 55, borderRadius: 55 / 2, marginLeft: 10, borderColor: 'red', borderWidth: 1 }} source={{ uri: 'https://tinyurl.com/y5s6o37c' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 3 }}> Jacquelinef143 </Text>
                                </View>

                                <View>
                                    <Image style={{ width: 55, height: 55, borderRadius: 55 / 2, marginLeft: 10, borderColor: 'red', borderWidth: 1 }} source={{ uri: 'https://tinyurl.com/y6bx8lqd' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 3 }}>Ayushman </Text>
                                </View>

                                <View>
                                    <Image style={{ width: 55, height: 55, borderRadius: 55 / 2, marginLeft: 10, borderColor: 'red', borderWidth: 1 }} source={{ uri: 'https://tinyurl.com/yye5atus' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 3 }}>Sheriya </Text>
                                </View>

                                <View>
                                    <Image style={{ width: 55, height: 55, borderRadius: 55 / 2, marginLeft: 10, borderColor: 'red', borderWidth: 1 }} source={{ uri: 'https://tinyurl.com/yye5atus' }} />
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 10, fontWeight: '100', color: '#b2b2b2', marginTop: 3 }}>Sheriya </Text>
                                </View>


                            </View>

                        </View>
                    </View>

                    <View style={{ borderBottomColor: '#cccccc', borderBottomWidth: 1, }} />

                    <View >
                        <View style={{ marginLeft: 10, flexDirection: 'row', }}>
                            <Image style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft: 5, marginTop: 10 }} source={{ uri: 'https://tinyurl.com/yye5atus' }} />
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black', textAlign: 'center', marginLeft: 5, justifyContent: 'center', marginTop: 15, }}>tgt_officialinsta </Text>
                        </View>


                        <View style={{ marginTop: 10, width: '100%', height: 300 }}>
                            <Image style={{ width: '100%', height: 300, position: 'absolute' }} source={{ uri: 'https://padblue.com/wp-content/uploads/2013/01/1.jpg' }} resizeMode="cover" />
                        </View>

                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                            <Icon style={{ backgroundColor: 'white', marginLeft: 20 }} source="FontAwesome" name="heart" />
                            <Icon style={{ backgroundColor: 'white', marginLeft: 20 }} source="Foundation" name="heart" />
                            <Icon style={{ backgroundColor: 'white', marginLeft: 20 }} source="Ionicons" name="md-share-alt" />
                        </View>

                    </View>

                </Container>

            </View>
        )
    }
}
