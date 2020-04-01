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

export const Item = ({title}) => {
    return (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    item:{
        margin:15,
        padding:3,
        justifyContent: "center",
        backgroundColor: "rgb(245,245,250)",
        borderRadius:2//23
    }
});