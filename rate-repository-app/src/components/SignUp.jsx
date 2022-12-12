import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from "yup";
import { useEffect } from 'react';
import useSignUp from '../hooks/useSignUp';
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: '',
    password: '',
    reppassword: ""
  };

  const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: "#d1d4d8",
        padding: 9,
        borderRadius: 4,
        marginBottom: 13
    },
    button: {
        backgroundColor: theme.colors.tag,
        padding: 9,
        borderRadius: 4,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: theme.fontWeights.bold
    },
    main: {
        backgroundColor: "white",
        padding: theme.padding.navbar,
    }
  });

  const validationSchema = yup.object().shape({
      username: yup
      .string()
      .min(1, "Username is shorter than 1")
      .required("Username is required"),
      password: yup
      .string()
      .min(5, "Password should be longer than 5")
      .required("Password is required"),
      reppassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Password confirmation is required")

  })

const SignUpForm = ({onSubmit}) => {
  return (
    <View>
        <FormikTextInput name="username" placeholder="Enter Username..." style={styles.input}/>
        <FormikTextInput name="password" placeholder="Enter Password..." style={styles.input} secureTextEntry/>
        <FormikTextInput name="reppassword" placeholder="Repeat Password..." style={styles.input} secureTextEntry/>
        <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
    );
};

const SignUp = () => {

    const [signUp, result] = useSignUp();
    const [signIn, res] = useSignIn();


    const onSubmit = async (values) => {
        console.log(values);
        const creds = {username: values.username, password: values.password};
        try {
            await signUp(creds);
            await signIn(creds);
        } catch(e) {
            console.log(e);
        }
    }


    useEffect(() => {
        if (result.data) {
            console.log(result.data)
        }
    }, [result.data])

    return (
        <View style={styles.main}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
}

export default SignUp;