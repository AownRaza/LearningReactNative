import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react"
import { Text, Image, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import { reactlogo } from "../assets"
import { Button, HOC } from "../components";
import { AppStyles, Colors } from "../globals";

const ButtonWithHOC= HOC(Button);

export const Login = () => {


    const navigation = useNavigation();

    const [username,setUserName] = useState();
    const [password,setPassword] = useState();

    const onChangeUserName = (value)=>{
        setUserName(value);
    }

    const onChangePassword = (value)=>{
        setPassword(value);
    }


    const renderInput = (placeHolder,value,onChange,isSecure) => {
        return (
            <TextInput style={styles.input}
                placeholder={placeHolder}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isSecure} />
        )
    }

    const onLogin = useCallback(()=>{
        navigation.navigate('Tabs');
    },[])

    return (
        <KeyboardAvoidingView style={styles.screen} behavior={'height'}>

            <View style={styles.container}>
                <Image source={reactlogo} />
                <Text style={styles.label}>React Native Training</Text>
            </View>

            <View style={styles.container}>
            {renderInput('Username',username,onChangeUserName,false)}
            {renderInput('Password',password,onChangePassword,true)}
            </View>

            <View style={styles.container}>
               <ButtonWithHOC caption={'Login'} onPress={onLogin}/>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        ...AppStyles.screen,
        justifyContent:'space-evenly',
        paddingHorizontal:30
    },
    container: {
        alignItems: 'center',
        marginVertical: 10
    },
    input: {
        width: '100%',
        height: 55,
        fontSize: 14,
        marginHorizontal: 20,
        borderColor: Colors.blue,
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical:10

    },
    label:{
        marginVertical:10,
        fontSize:20
    }
})