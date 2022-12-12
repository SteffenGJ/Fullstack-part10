import { useMutation, useQuery } from "@apollo/client";
import { Text, FlatList } from "react-native"
import { DELETE_REPOSITORY, MY_REVIEWS } from "../graphql/queries";
import Review from "./Review";

const MyReviews = () => {

    const {data, loading, error, refetch} = useQuery(MY_REVIEWS);

    const [mutate, result] = useMutation(DELETE_REPOSITORY);


    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        console.log("Error in My Reviews");
    }

    const {edges} = data.me.reviews;

    const reviewNodes = edges ? edges : [];


    return(
        <FlatList
        data={reviewNodes}
        renderItem={({item}) => <Review review={item} refetch={refetch} mutate={mutate}/>}
        />
    )
}

export default MyReviews;