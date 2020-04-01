import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export const Field = ({style,callback,placeHolder,password}) => {
    return (
        <TextInput secureTextEntry={password} style={[style,styles.round]} placeholder={placeHolder} onChangeText={text=>callback(text)} />
    );
}

const styles=StyleSheet.create({
    round:{
        margin:5,
        padding:10,
        alignItems:"center",
        justifyContent: "center",
        borderRadius:23,//23,
        //borderWidth:1,
        borderColor:'rgb(30,40,50)'
    }
});