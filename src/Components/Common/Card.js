import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return(
        <View style = {styles.CardStyle}>
            {props.children}
        </View>
    );
};

const styles = {
  CardStyle:{
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 1,
    shadowColor: '#000',
    margin: 2
}
}

export {Card};