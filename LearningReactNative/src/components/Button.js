import React from "react";
import { StyleSheet, View,Text } from "react-native"
import { Colors } from "../globals";


const ButtonUI = (props)=>{

    const {caption,style} = props;

    return(
        <View style={[styles.button,style]}>
            <Text style={style?style:styles.caption}>{caption}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        paddingHorizontal:120,
        borderColor: Colors.blue,
        backgroundColor:Colors.lightBlue,
        borderWidth: 1.5,
        borderRadius: 30,
        alignItems:'center'

    },
    caption:{
        fontSize:18,
        color:Colors.darkBlue,
        fontWeight:'bold'
    }
})

export  const Button = React.memo(ButtonUI);