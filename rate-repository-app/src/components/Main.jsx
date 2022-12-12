import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import CreateReview from "./CreateReview"
import SingleRepositoryList from './SingleRepositoryList';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/repositories/:id" element={<SingleRepositoryList/>}/>
        <Route path="/createreview" element={<CreateReview/>}/>
        <Route path="/myreviews" element={<MyReviews/>}/>
      </Routes>
    </View>
  );
};

export default Main;