import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from "./AppBarTab";
import Constants from 'expo-constants';
import theme from '../theme';
import useSignOut from '../hooks/useSignOut';
import { useEffect, useState } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: theme.padding.navbar,
    paddingRight: theme.padding.navbar,
    backgroundColor: theme.colors.bar,
    flexDirection: "row",
  },
  tab: {
    color: theme.colors.tab,
    fontWeight: theme.fontWeights.bold,
    marginRight: 25
  }
});

const AppBar = () => {
  const [token, setToken] = useState(false)
  const authStorage = useAuthStorage();
  const {signOut} = useSignOut();

  const onSubmit = async () => {
    try {
      signOut();
    } catch(e) {
      console.log(e);
    }
  }

  const getToken = async () => {
    const token = await authStorage.getAccessToken();
    console.log(token);
    setToken(token)
    return token
  }

  useEffect(() => {
    getToken();
  }, [])

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab style={styles.tab} title="Repositories" to="/"/>
      {!token ? 
        <AppBarTab style={styles.tab} title="Sign in" to="/signin"/>
        :
        <AppBarTab style={styles.tab} title="Sign out" handlePress={onSubmit}/>
      }
    </ScrollView>
  </View>
  );
};

export default AppBar;