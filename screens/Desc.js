import React, {Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
}    from 'react-native';

export default class Desc extends React.Component {
   


    render(){
        return(
            <View>
                <TouchableOpacity disabled={true}
                    style={styles.containerStyle}>                
                    <Text  style={styles.textStyle}> Presentation abstract </Text>
                <Text  style={styles.abstractStyle}> Praca ma na celu zbadanie i 
                    przetestowanie w jakich operacjach na danych 
                    przestrzennych możliwe jest przyspieszenie analiz 
                    poprzez wykorzystanie zrównoleglania obliczeń 
                    na procesorach graficznych. Praca oparta będzie 
                    o technologię Nvidia CUDA. Dzięki wykorzystaniu 
                    tej metody niektóre działania mogą być wykonywane 
                    nawet kilkaset razy szybciej.Rozwiązanie to 
                    zostało po raz pierwszy zaprezentowane w roku 2007, 
                    ale wciąż jest rzadko wykorzystywane w przetwarzaniu 
                    danych przestrzennych.Efektem pracy będzie wskazanie 
                    do jakiego typu problemów obliczeniowych najlepiej 
                    wykorzystywać procesory graficzne.</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
      top: '5%',   
      //marginBottom: 10,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#4a4a4a',
      textAlign: 'center',
      position: 'absolute',
      //justifyContent: 'center',
      //flex: 1,
      //alignItems: 'center',
      //textAlignVertical: 'center',
      
    },

    abstractStyle: {
        
        top: '15%', 
        fontSize: 16,
        color: '#4a4a4a',
        //textAlign: 'center',
        position: 'absolute',
        marginLeft: 10,
        marginRight: 10,
        //justifyContent: 'center',
        //flex: 1,
        //alignItems: 'center',
        //textAlignVertical: 'center',
  
    },

    containerStyle: {
        height: '90%',
        width: '90%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderRadius: 5, 
  
        ...Platform.select({
          ios: {
            shadowColor: '#707070',
            //shadowOffset: { height: 3 },
            shadowOpacity: 1, //from 0 to 1
            shadowRadius: 2,
          },
          android: {
          elevation: 5
          },
        }),
  
        //shadowOffset: { width: 2, height: 2 },
      
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
        justifyContent: 'flex-end',
      }
})