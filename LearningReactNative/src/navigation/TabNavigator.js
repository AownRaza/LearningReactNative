import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkProps } from '@react-navigation/native';
import { Image, StyleSheet, Text } from 'react-native';
import { reactlogo } from '../assets';
import { Colors } from '../globals';
import { Home, Settings } from '../screens';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarIcon: () => <Image source={reactlogo} style={{width:20,height:20}}/>,
                tabBarLabel:(props)=><Text style={props.focused?styles.activeTab:styles.InActiveTab}>{props.children}</Text>,
                tabBarInactiveTintColor:Colors.lightBlue,
                tabBarActiveTintColor:Colors.darkBlue
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTab:{
        color:Colors.darkBlue,
        fontSize:15,
        fontWeight:'600'
    },
    InActiveTab:{
        color:'black',
        fontSize:12
    }
})