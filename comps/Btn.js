import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Btn = ({title,style,callback,textStyle}) => {
    return (
        <TouchableOpacity style={[styles.round,style]} onPress={()=>callback()}>
            <Text style={[{color:'#ffffff'},textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    round:{
        margin:5,
        padding:10,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "rgb(220,150,30)",
        borderRadius:23//23
    }
});