import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,ImageBackground } from 'react-native';

const ButtonComponent = (props) =>{
    if (props.disabled){
        var buttonColor = 'grey'
    }
    else {
        var buttonColor = 'crimson'
    }

    if(props.start === 'NextFinish'){
        var margin = 20

    }else{
        var margin = 170
    }
    return(
        

       
        <TouchableOpacity
   
        onPress = {props.onPress} disabled={props.disabled} >
        <View 
        
        style = {{...styles.buttonContainer,backgroundColor:buttonColor,marginTop:margin}}>
                
            <Text style = {styles.buttonContainerText}>{props.text}</Text>
        </View>
        </TouchableOpacity>
       
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'50%',
        borderRadius:30,
        height:70,
        justifyContent:'center',
       // marginTop:170,
       opacity:0.7,
      
        
      },
    
      buttonContainerText:{
        fontSize:30,
        color:"white",
        padding:20,
        textAlign:'center',
       
      },
});

export default ButtonComponent;