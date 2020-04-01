import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';
import { Btn } from '../comps/Btn';
import { Field } from '../comps/Field';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Login = ({navigation}) => {
    let w=Dimensions.get('window').width*0.9;
    let h=Dimensions.get('window').height*0.9;
    const [txt1,setxt1]=useState('');
    const [txt2,setxt2]=useState('');
    return (
        <ImageBackground source={require('./../imgs/back.png')} style={styles.main}>
            <StatusBar backgroundColor="rgb(190,120,20)" barStyle="light-content"/>
            <ScrollView>
                <Image style={styles.im} source={require('./../imgs/index.png')}/>
                <Field style={{width:w*0.9,height:50 ,backgroundColor:'rgba(230,230,230,0.5)'}} placeHolder='login..' callback={text=>setxt1(text)}/>
                <Field password={true} style={{width:w*0.9,height:50,backgroundColor:'rgba(230,230,230,0.5)'}} placeHolder='password..' callback={text=>setxt2(text)}/>
                <Btn style={{width:w*0.9,height:45}} title='CONNECTION' callback={()=>{
                    
                    navigation.push((txt1=='student')?'Espace Etudiant':'Espace Enseignant',{
                        screen:'Home',
                        params:{
                            log:txt1
                        }
                    })
                }} />
                <View style={styles.info}>
                <Text style={styles.text}>contact us at</Text>
                <View style={styles.clms}>
                <TouchableOpacity onPress={() => Linking.openURL("http://www.takeuselesswebsite.com/")}>
                <Image source={require('./../imgs/gmail.png')} 
                    style={styles.icn} 
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("http://www.takeuselesswebsite.com/")}>
                <Image source={require('./../imgs/whatsapp.png')} 
                    style={styles.icn} 
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("http://www.takeuselesswebsite.com/")}>
                <Image source={require('./../imgs/facebook.png')} 
                    style={styles.icn} 
                />
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    );
}
Login.getder
const styles=StyleSheet.create({
    main:{
        flex: 1,
        //justifyContent: "center",
        alignItems:"center",
        backgroundColor: "rgb(250,247,242)"
    },
    im:{
      width:390*0.9, 
      height:220*0.9,//250*2
      marginVertical:50
    },
    clms:{
        flexDirection:"row",
        alignItems: "center"
      },
      icn:{
        width:70,
        height:70,
        marginHorizontal:16
      }, 
      info:{
        alignItems: "center",
        marginTop:100,
    },
    text:{
      margin:10,
      //alignContent: "center",
      color: 'rgb(250,245,230)',
      fontFamily: "century-gothic",
      fontSize:13
    }
});