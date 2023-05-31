
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, StyleSheet } from 'react-native';
import { Button, HOC } from '../components';
import { Colors } from '../globals';
import { Details, Home, Login } from '../screens';
import { TabNavigator } from './TabNavigator';

const LogoutButton = HOC(Button);

export const RootNavigator = () => {
    const Stack = createNativeStackNavigator();

    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={TabNavigator}
                options={{
                    headerTitle: '',
                    headerBackVisible: false,
                    headerRight: () => <LogoutButton style={styles.logout} caption={'Logout'}
                        onPress={() => {
                            navigation.reset({
                                routes: [{ name: 'Login' }]
                            })
                        }} />

                }} />
                <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    logout: {
        paddingHorizontal:8,
        paddingVertical: 3,
        backgroundColor: Colors.white,
        fontSize: 18,
        borderWidth:0,
        color:Colors.red,
    }
})