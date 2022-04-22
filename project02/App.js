
import * as React from 'react';
import { View, Text, TextInput,TouchableOpacity, Button , SafeAreaView, FlatList,StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListItem from "./components/ListItem.js";


    const productos = [
    {
      nombre: 'Iphone 12',
      descripcion: 'Un chip prodigioso. Tecnología 5G. Sistema avanzado de cámara dual. ',
      descripcion2: 'Un chip prodigioso. Tecnología 5G. Sistema avanzado de cámara dual. Esta descripcion es más larga de la que aparece en la pagina prinficla',
      id: '001',
      
    },
        {
      nombre: 'Iphone 11',
      descripcion: 'Y no iba a ser menos el iPhone 13 ',
      descripcion2:'Y no iba a ser menos el iPhone 13 Esta descripcion es más larga de la que aparece en la pagina prinficla',
      id: '002',
    },
        {
      nombre: 'Iphone 13',
      descripcion: 'Ceramic Shield, más duro que cualquier vidrio de smartphonel',
      descripcion2:'Ceramic Shield, más duro que cualquier vidrio de smartphonel Esta descripcion es más larga de la que aparece en la pagina prinficla',
      id: '003',
    },
        {
      nombre: 'Iphone X',
      descripcion: 'El nuevo gran angular captura un 47 % más de luz para lograr mejores instantáneas',
      descripcion2: 'El nuevo gran angular captura un 47 % más de luz para lograr mejores instantáneas Esta descripcion es más larga de la que aparece en la pagina prinficla',
      id: '004',
    },
        {
      nombre: 'Iphone 8 Plus',
      descripcion: 'El nuevo ultra gran angular muestra más detalle en las zonas oscuras de tus fotos',
      descripcion2: 'El nuevo ultra gran angular muestra más detalle en las zonas oscuras de tus fotos Esta descripcion es más larga de la que aparece en la pagina prinficla',
      id: '005',
    },
  ]

function HomeScreen({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Iniciar Sesion</Text>
       <TextInput
        style={{height:40,padding:10, borderColor:'gray', borderWidth: 1, margin: 1, width:180}}
        placeholder=" Usuario"
      />
       <TextInput
        style={{height:40,padding:10, marginVertical:10, borderColor:'gray', borderWidth: 1, margin: 2, width:180}}
        placeholder=" Contraseña"
      />
      <Button 
      title = "Iniciar Sesion"
      onPress={ () => navigation.navigate('Vista')}
      />

    </View>
  );
}

function Detalle({navigation,route}){
  const { itemDes,itemnombre} = route.params;
  return(
    <View style = {styles.container}>
      <Text style={{fontWeight:'bold',fontSize:23,marginVertical:3,color:'white'}}>{itemnombre}</Text>
  <Text style={{fontSize:11,color:'white'}}>{itemDes}</Text>
  <Text>
    
    </Text>
  <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} style={{  alignSelf:'center',  width: 182,
    height: 180,
    marginVertical:20}}
  />
    </View>
  )
}
function Vista({navigation}){

  return(
    <SafeAreaView style={{paddingHorizontal:10}}>

      <FlatList 
        ListHeaderComponent ={()=><Text style={{fontWeight:'bold',fontSize:21,marginVertical:10}}> MIS PRODUCTOS </Text>}
        ItemSeparatorComponent = {() => <View style={{marginBottom:10}}/>}
        data = {productos}
        keyExtractor = {(item) => item.id}
        renderItem = {({item,index})=> {
        return(
          <TouchableOpacity
            onPress={()=> navigation.navigate('Detalle',{
              itemDes:item.descripcion2,
              itemnombre:item.nombre,
              
              })
            }>
          <ListItem item = {item} />
        </TouchableOpacity>
        )
        }}
        />

    </SafeAreaView>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Pagina de Inicio" component={HomeScreen} />
        <Stack.Screen name="Vista" component={Vista} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles =StyleSheet.create({
  container:{
    backgroundColor: '#042940',
    padding:10,
    borderRadius:10,
  },
})


export default App;