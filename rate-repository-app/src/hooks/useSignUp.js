import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { SIGN_UP } from "../graphql/queries";

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);
    const navigate = useNavigate();

    const signUp = async ({username, password}) => {
        await mutate({variables: {user: {username, password}}});
        navigate("/signin");

    }

    return [signUp, result];

}

export default useSignUp;