import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image } from "react-native"
import { AppStyles, Colors } from "../globals"

import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Details = (props) => {

    const { itemId } = props.route.params;
    const navigation = useNavigation();

    const homeSate = useSelector(state => state.home);

    const data = homeSate.data;

    const item = data.find((i)=>itemId === i.id);
    
    useEffect(() => {
        navigation.setOptions({ headerTitle: item.name })
    }, []);

    return (
        <View style={AppStyles.screen}>

            <View style={styles.itemContainer} onPress={() => onItemPressed(item)}>
                <Image source={{ uri: item.image.original }} style={styles.image}></Image>
                <Text style={styles.title}>{`Rating ${item.rating.average}`}</Text>
                <Text style={styles.summary}>{item.summary.replaceAll('<p>', '').replaceAll('</p>', '')}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: Colors.lightBlue,
        borderRadius: 20
    },
    image: {
        width: '100%',
        height: 350,
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        paddingHorizontal: 10,
        fontWeight: '800'
    },
    summary: {
        fontSize: 18,
        marginVertical: 10,
        paddingHorizontal: 10,
    }
})