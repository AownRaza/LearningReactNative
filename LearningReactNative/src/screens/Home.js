import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AppStyles, Colors } from "../globals"
import axios from 'axios';
import { useEffect, useState } from "react";
import { AppConstants } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/homeReducer";
import { fetchEpisodes } from "../redux/homeAction";

export const Home = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const homeSate = useSelector(state=>state.home);

    const isLoading = homeSate.loading;
    const data = homeSate.data;
    const error = homeSate.error;

    useEffect(() => {
       dispatch(fetchEpisodes())
    }, []);

    const onItemPressed = (id)=>{
        navigation.navigate('Details',{itemId:id})
    }

    const renderListItem = ({ item }) => {

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={()=>onItemPressed(item.id)}>
                <Image source={{uri:item.image.original}} style={styles.image}></Image>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[AppStyles.screen, { justifyContent: 'center' }]}>
            {isLoading ? <ActivityIndicator size={'large'} color={Colors.blue} /> :

                <FlatList
                    contentContainerStyle={{flexGrow:1}}
                    data={data}
                    renderItem={renderListItem}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={()=><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            {
                                error && <Text>Sorry, Something went wrong!</Text>
                            }
                    </View>}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        backgroundColor: Colors.lightBlue,
        borderRadius:20,
        paddingBottom:10
    },
    image:{
        width:'100%',
        height:250,
        borderRadius:20,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    },
    title:{
        fontSize:16,
        marginVertical:10,
        paddingHorizontal:10,
        fontWeight:'800'
    }
})