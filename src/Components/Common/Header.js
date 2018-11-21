import React from 'react';
import {Text, View} from 'react-native';


const Header = (props) => {

    return(
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle} >{props.headertext}</Text>
        </View>
    ) 
};
 

const styles = {
    viewStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 10,
        shadowColor:'#F8F8F8',
        shadowOpacity:0.2,
        elevation:2,
        shadowOffset:{width: 0, height:10}

    },

    textStyle: {
        fontSize: 20
    }
};


export { Header };