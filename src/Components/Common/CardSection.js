import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {

return(
<View style={Styles.ContainerStyle}>
{props.children}
</View>
);
};

const Styles ={
    ContainerStyle:{
        borderColor: '#ddd',
        borderWidth: 1,
        borderBottomWidth: 1,
        shadowColor: '#000',
        padding: 5,
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection:'row'
    }
}
export  {CardSection};
 