import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/queries";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async (obj) => {
        console.log(obj);
        await mutate({variables: {review: obj}});
        console.log(await result);
    };

    return [createReview, result]
}

export default useCreateReview;