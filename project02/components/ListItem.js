import React from 'react'
import {View, Text, StyleSheet,Button,Alert,TouchableOpacity,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ListItem = ({item}) =>{
  const {nombre, id, descripcion} = item 
  return(
  <View style = {styles.container}>
  <Text style={{fontWeight:'bold',fontSize:18,marginVertical:3,color:'white'}}>{nombre}</Text>
  <Text style={{fontSize:11,color:'white'}}>{descripcion}</Text>
  <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} style={{  alignSelf:'center',  width: 66,
    height: 58,
    marginVertical:6}}
  />
  


  </View>
  )
}

const styles =StyleSheet.create({
  container:{
    backgroundColor: '#042940',
    padding:10,
    borderRadius:10,
  },
})

export default ListItem