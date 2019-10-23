import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'blue'
    }, headerStyles: {
        height: '15%',
        width: '100%',
        paddingTop: 20,
        marginLeft: 50
    },headerText:{
        color: 'white', 
        fontWeight: '700', 
        fontSize: 20
    },footerStyles:{
        height: '15%',
        width: '100%',
        justifyContent: 'center'
    },footerButton:{
        justifyContent: 'center',
        height: '60%',
        marginLeft: 40,
        marginRight: 40 
    },footerButtonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400'
    },mainBody:{
        height:'70%',
        width:'100%',
        backgroundColor:'red'
    }
})
