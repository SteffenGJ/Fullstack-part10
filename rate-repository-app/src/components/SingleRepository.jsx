import { FlatList } from "react-native"
import SingleRepositoryInfo from "./SingleRepositoryInfo";
import Review from "./Review";

const SingleRepository = ({props, onEndReached}) => {
    console.log(props.reviews, "THIS IS IT HIHI");
    console.log("ONENDREACHED!!!!!!!!!!!!!!!!!!", onEndReached)
    return (
        <FlatList
        data={props.reviews.edges}
        renderItem={({item}) => <Review review={item}/>}
        ListHeaderComponent={() => <SingleRepositoryInfo props={props}/>}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        />
    )
}

export default SingleRepository;