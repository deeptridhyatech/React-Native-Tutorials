import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
// Styles
import styles from './Styles/DataDetailScreenStyles'
import { Container, Header, Body, Left, Icon, Text, List, ListItem, Right, Content, Card, CardItem } from 'native-base'

export default class DataDetailScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            result: '',
        }
    }


    renderItems = ({ item }) => {
        return (
            <List>
                <ListItem itemHeader first>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note numberOfLines={1}>{item.email}</Text>
                    </Body>

                    {/* <Right>
                        <Icon onPress={() => this.props.navigation.navigate('DataScreenStyles')} name="arrow-forward" />
                    </Right> */}

                </ListItem>
            </List>
        )

    }

    render() {

        const userDetail = this.props.navigation.getParam('userDetail', 'nothing sent')


        return (
            <View style={styles.mainContainer}>
                <Container>
                    <Header>
                        <Left onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{ color: 'white' }} type="MaterialIcons" name="arrow-back">
                            </Icon>
                        </Left>
                        <Body><Text style={{ color: 'white' }}>Users Details</Text></Body>
                    </Header>
                    <ScrollView>
                        <Card>
                            <CardItem header>
                                <Text>Personal Details of {userDetail.name}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View>
                                        <Text>Name : {userDetail.name}</Text>
                                    </View>

                                    <View>
                                        <Text>Email : {userDetail.email}</Text>
                                    </View>

                                    <View>
                                        <Text>Phone : {userDetail.phone}</Text>
                                    </View>

                                    <View>
                                        <Text>Website : {userDetail.website}</Text>
                                    </View>

                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header><Text>Company Detail </Text></CardItem>

                            <CardItem>
                                <Body>
                                <View>
                                    <Text>Company Name : {userDetail.company.name} </Text>
                                </View>

                                <View>
                                    <Text>Buisness : {userDetail.company.bs} </Text>
                                </View>
                                </Body>
                                
                            </CardItem>

                        </Card>
                    </ScrollView>
                </Container>
            </View>
        )
    }
}
