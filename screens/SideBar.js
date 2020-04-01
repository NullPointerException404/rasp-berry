import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Item } from '../comps/Item';
import { Btn } from '../comps/Btn';
export const SideBar=()=>{
    return (
        <View style={{flex: 1,backgroundColor:'rgb(40,40,50)'}}>
            <View style={{backgroundColor:'rgb(70,70,80)',padding:15,flexDirection:'row',alignItems:"center"}}>
                <Image source={require('../imgs/user.png')} style={{width:100,height:100}}/>
                <Text style={{color:'#ffffff',fontWeight:'bold',margin:10}}>USER FLAN</Text>
            </View>
            <Btn title='TEST' textStyle={{color:'#000000',fontWeight:'bold'}} style={{borderRadius:2,padding:15,backgroundColor:'rgb(245,245,250)',width:200,margin:35}} />
        </View>
    );
}