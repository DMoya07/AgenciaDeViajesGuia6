import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App = () =>{
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return(
    <>
    <ScrollView>
      <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} 
      onRequestClose={() => {
        alert('Modal has been closed')
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Avenger (2012)</Text>
            <Text>Los heroes más poderosos del planeta deberán unirse para hacer frente al villano Loki</Text>
            <Button title="Cerrar" onPress={() =>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection:'row'}}>
        <Image
        style={styles.banner}
        source={require('./src/img/cap.jpeg')}/>
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>¿Qué ver en Disney Plus?</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/avengers.jpg')}  
            />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/logan.png')}  
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/mike.jpg')}  
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/simpson.jpg')}  
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./src/img/wanda.jpg')}  
            />
          </View>
        </ScrollView>
        <Text style={styles.titulo}>Recomendados</Text>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/infinity.jpg')}  
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/strange.jpg')}  
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/antman.jpg')}  
          />
        </View>
      </View>

      <Text style={styles.titulo}>Documentales</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/diana.jpg')}
          />
        </View>

        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/frida.png')}
          />
        </View>

        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/pixar.jpeg')}
          />
        </View>

        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/ww2.jpg')}
          />
        </View>
      </View>

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex:1,
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1,
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center',
  },
});

export default App;