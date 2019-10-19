import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
// Styles
import styles from './Styles/DataScreenStyles'
import { Container, Header, Body, Left, Icon, Text, List, ListItem, Right, Content } from 'native-base'
import axios from 'axios';
import DataDetailScreen from './DataDetailScreen'

export default class DataScreen extends Component {

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

    componentWillMount() {
        this.getUserData();
    }

    getUserData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.length) {
                        this.setState({
                            result: response.data
                        })
                        console.log("Response", response.data)
                    }
                }
            }, (error) => {
                console.log(error);
            })
    }

    renderItems = ({ item }) => {
        return (
                <List>
                    <ListItem itemHeader first onPress={()=> this.props.navigation.navigate('DataDetailScreen',{'userDetail': item})}>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note numberOfLines={1}>{item.email}</Text>
                        </Body>

                        <Right>
                            <Icon  name="arrow-forward" />
                        </Right>

                    </ListItem>
                </List>


        )

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Container>
                    <Header>
                        <Left>
                            <Icon style={{ color: 'white' }} type="MaterialIcons" name="arrow-back">
                            </Icon>
                        </Left>
                        <Body><Text style={{ color: 'white' }}>Users Profile</Text></Body>
                    </Header>
                    <ScrollView>
                        <View>
                            <FlatList
                                data={this.state.result}
                                renderItem={this.renderItems}
                            />
                        </View>
                    </ScrollView>
                </Container>
            </View>
        )
    }
}
