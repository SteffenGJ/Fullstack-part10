import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";
import { useNavigate, useParams } from "react-router-native";


const Review = ({review, refetch, mutate}) => {
    const { node } = review;
    const navigate = useNavigate();

    let {id} = useParams();

    const viewRep = () => {
        navigate(`/repositories/${node.repository.id}`);
    }

    const deleteRep = async () => {
        await mutate({variables: {deleteReviewId: node.id}});
        refetch()
    }

    const onPress = async () => {
        Alert.alert(
            "Delete Review",
            "Are you sure, you want to delete this review?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Delete", onPress: deleteRep }
            ]
          );
    } 

    const newDate = parseISO(node.createdAt);
    const date = format(newDate, 'dd.MM.yyyy');

    return (
        <View>
        <View style={styles.layout}>
            <View style={styles.reviewview}>
                <View style={styles.rating}>
                    <Text>{node.rating}</Text>
                </View>
            </View>
            <View style={styles.textview}>
                <Text style={styles.usertext}>{id ? node.user.username : node.repository.fullName}</Text>
                <Text style={styles.datetext}>{date}</Text>
                <Text style={styles.texttext}>{node.text}</Text>
            </View>
        </View>
        {!id && 
            <View style={styles.buttonContainer}>
                <Pressable onPress={viewRep}>
                    <Text style={styles.buttonBlue}>View Repository</Text>
                </Pressable>
                <Pressable onPress={onPress}>
                    <Text style={styles.buttonRed}>Delete Review</Text>
                </Pressable>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        borderRadius: "50%",
        borderColor: theme.colors.tag,
        borderWidth: 3,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.tag,
        fontSize: theme.fontSizes.subheading,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.fonts.main,
    },
    layout: {
        backgroundColor: "white",
        padding: 25,
        marginTop: 10,
        flexDirection: "row",
    },
    textview: {
        flex: 5
    },
    reviewview: {
        flex: 1,
        alignItems: "center",
        marginRight: 10
    },
    usertext: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5
    },
    datetext: {
        marginBottom: 5,
        color: theme.colors.textSecondary,
    },
    texttext: {
        color: theme.colors.textPrimary
    },
    buttonContainer: {
        
            backgroundColor: "white",
            padding: 25,
            flexDirection: "row",
            justifyContent: "space-evenly"
        
    },
    buttonBlue: {
        backgroundColor: theme.colors.tag,
        color: "white",
        padding: 4,
        borderRadius: 10,
        minWidth: "45%"
    },
    buttonRed: {
        backgroundColor: "red",
        color: "white",
        padding: 4,
        borderRadius: 10,
        minWidth: "45%"
    }
  });

export default Review;