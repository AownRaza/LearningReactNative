jest.mock('@react-navigation/native',()=>{
    return{
        createNavigationFactory:jest.fn()
    }
})

jest.mock('@react-navigation/native-stack',()=>{
    return{
        createNativeStackNavigator:jest.fn()
    }
})

jest.mock('@react-navigation/bottom-tabs',()=>{
    return{
        createBottomTabNavigator:jest.fn()
    }
})

jest.mock('react-native-safe-area-context',()=>{
    return{
        SafeAreaView:jest.fn()
    }
})

