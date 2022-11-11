import { Text, Pressable } from "react-native"
import { Link } from "react-router-native"

const AppBarTab = ({title, style, to, handlePress}) => {
    if (to) {
        return (
            <Pressable onPress={() => alert("ALERT!!!!!")}>  
                <Link to={to}>      
                    <Text style={style}>{title}</Text>
                </Link>
            </Pressable>
        )
    } else if (handlePress) {
        return (
            <Pressable onPress={handlePress}>  
                <Text style={style}>{title}</Text>
            </Pressable>
        )
    }
    return (
        <Text>Somethinng went wrong</Text>
    )
}

export default AppBarTab