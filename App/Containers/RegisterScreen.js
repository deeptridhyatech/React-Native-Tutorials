import React, { Component } from 'react'
import { View } from 'react-native'
// Styles
import styles from './Styles/RegisterStyles'
import { Container, Header, Body, Left, Icon, Text, Right, Button } from 'native-base'
import { FormBuilder, FieldGroup, FieldControl, Validators } from "react-reactive-form";
import { Colors } from '../Themes';

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
                <View>
                    <View style={styles.headerStyles}>
                        <View >
                            <Text style={styles.headerText}>Contract with</Text>
                        </View>

                        <View >
                            <Text style={styles.headerText}>Contract with</Text>
                        </View>
                    </View>
                </View>



               <View style={styles.mainBody}>
                    <View>

                    </View>
               </View>


                <View style={styles.footerStyles}>
                    <Button rounded success style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Done & Invite</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
