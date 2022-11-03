import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from "yup";

const initialValues = {
    username: '',
    password: '',
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
      .min(3, "Password should be longer than 3")
      .required("Password is required")
  })

const SignInForm = ({onSubmit}) => {
  return (
    <View>
        <FormikTextInput name="username" placeholder="Enter Username..." style={styles.input}/>
        <FormikTextInput name="password" placeholder="Enter Password..." style={styles.input} secureTextEntry/>
        <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
    );
};

const SignIn = () => {

    const onSubmit = () => {
        console.log("SIGNED IN");
    }

    return (
        <View style={styles.main}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
}

export default SignIn;