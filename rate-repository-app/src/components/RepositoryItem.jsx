import { Text, View, Image, StyleSheet } from "react-native";
import theme from "../theme";

const RepositoryItem = ({props}) => {

    const styles = StyleSheet.create({
        component: {
            backgroundColor: "white",
            padding: 15,
        },
        upper: {
            flexDirection: "row",
        },
        lower: {
            padding: 5,
            width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        lowerSubText: {
            textAlign: "center",
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            fontSize: theme.fontSizes.subheading
        },
        lowerSubTextBottom: {
            textAlign: "center",
            color: theme.colors.textSecondary,
            fontSize: theme.fontSizes.body
        },
        textbox: {
            width: "100%"
        },
        image: {
            height: 50, 
            width: 50,
            borderRadius: "6%",
            marginRight: 15
        },
        lang: {
            color: "white",
            textAlign: "center"
        },
        langTag: {
            display: "inline",
            padding: 4,
            borderRadius: "5%",
            backgroundColor: theme.colors.tag,
            width: 80,
            marginBottom: 10
        },
        title: {
            color: theme.colors.textPrimary,
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading
        },
        subTitle: {
            color: theme.colors.textSecondary,
            fontSize: theme.fontSizes.body,
            marginTop: 10,
            marginBottom: 10
        }
    })

    return (
        <View style={styles.component}>
            <View style={styles.upper}>
                <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
                <View style={styles.textbox}>
                    <Text style={styles.title}>{props.fullName}</Text>
                    <Text style={styles.subTitle}>{props.description}</Text>
                    <View style={styles.langTag}>
                        <Text style={styles.lang}>{props.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.lower}>
                <View style={styles.lowerSub}>
                    <Text style={styles.lowerSubText}>{(props.stargazersCount / 1000).toFixed(1)}k</Text>
                    <Text style={styles.lowerSubTextBottom}>Stars</Text>
                </View>
                <View style={styles.lowerSub}>
                    <Text style={styles.lowerSubText}>{(props.forksCount / 1000).toFixed(1)}k</Text>
                    <Text style={styles.lowerSubTextBottom}>Forks</Text>
                </View>
                <View style={styles.lowerSub}>
                    <Text style={styles.lowerSubText}>{props.reviewCount}</Text>
                    <Text style={styles.lowerSubTextBottom}>Reviews</Text>
                </View>
                <View style={styles.lowerSub}>
                    <Text style={styles.lowerSubText}>{props.ratingAverage}</Text>
                    <Text style={styles.lowerSubTextBottom}>Rating</Text>
                </View>
            </View>
        </View>
    );
}

export default RepositoryItem;