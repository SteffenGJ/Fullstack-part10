import { Pressable, View, StyleSheet, Text } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from "yup";
import useCreateReview from '../hooks/useCreateReview';
import { useEffect } from 'react/cjs/react.development';
import { useNavigate } from "react-router-native";

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: "",
    text: ""
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
    ownerName: yup
    .string()
    .required("Repository owner name is required"),
    repositoryName: yup
    .string()
    .required("Repository name is required"),
    rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating is required")
})

  const ReviewForm = ({onSubmit}) => {
    return (
      <View>
          <FormikTextInput name="ownerName" placeholder="Repository owner name..." style={styles.input}/>
          <FormikTextInput name="repositoryName" placeholder="Repository name..." style={styles.input}/>
          <FormikTextInput name="rating" placeholder="Rating between 0 and 100..." style={styles.input}/>
          <FormikTextInput name="text" placeholder="Review..." style={styles.input} multiline={true}/>
          <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
      </View>
      );
  };

const CreateReview = () => {

    const [createReview, result] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const valuess = {...values, rating: Number(values.rating)}
        try {
            console.log(valuess);
            createReview(valuess);
        } catch(e) {
            console.log(e);
        } 
    }

    useEffect(() => {
        if (result.data) {
            console.log(result.data)
            navigate(`/repositories/${result.data.createReview.repository.id}`)
        }
    }, [result.data])

    return (
        <View style={styles.main}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
}

export default CreateReview;

/**
 * import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from "yup";
import useSignIn from '../hooks/useSignIn';
import { useEffect } from 'react';

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

    const [signIn, result] = useSignIn();

    const onSubmit = async (values) => {
        try {
            signIn(values);
        } catch(e) {
            console.log(e)
        }
    }


    useEffect(() => {
        if (result.data) {
            console.log(result.data.authenticate.accessToken)
        }
    }, [result.data])

    return (
        <View style={styles.main}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
            </Formik>
        </View>
    )
}

export default SignIn;
 */