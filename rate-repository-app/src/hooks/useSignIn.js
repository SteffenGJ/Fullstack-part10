import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/queries";
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(SIGN_IN);
    const navigate = useNavigate();
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      console.log(username, password);
      mutate({variables: {credentials : {username, password}}})
      const { data } = await mutate({variables: {credentials : {username, password}}});
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      navigate("/");
    };
  
    return [signIn, result];
  };

  export default useSignIn;