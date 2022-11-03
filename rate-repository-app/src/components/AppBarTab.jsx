import { Text, Pressable } from "react-native"
import { Link } from "react-router-native"

const AppBarTab = ({title, style, to}) => {
    return (
        <Pressable onPress={() => alert("PRESS!!!!!")}>  
            <Link to={to}>      
                <Text style={style}>{title}</Text>
            </Link>
        </Pressable>
    )
}

export default AppBarTab