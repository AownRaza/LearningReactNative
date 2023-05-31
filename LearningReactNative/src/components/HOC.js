import { TouchableOpacity ,StyleSheet} from "react-native"

export const HOC = (Component) => {
    return (props) => {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <Component {...props} />
            </TouchableOpacity>

        )
    }
}
