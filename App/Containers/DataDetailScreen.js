import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
// Styles
import styles from './Styles/DataDetailScreenStyles'
import { Container, Header, Body, Left, Icon, Text, List, ListItem, Right, Content } from 'native-base'

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

    componentWillMount() {
        // this.getUserData();
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
        return (
            <View style={styles.mainContainer}>
                <Container>
                    <Header>
                        <Left>
                            <Icon style={{ color: 'white' }} type="MaterialIcons" name="arrow-back">
                            </Icon>
                        </Left>
                        <Body><Text style={{ color: 'white' }}>Users Details</Text></Body>
                    </Header>
                    <ScrollView>
                        <View>
                            <Text> {this.props.userDetail.name}</Text>
                        </View>
                    </ScrollView>
                </Container>
            </View>
        )
    }
}
