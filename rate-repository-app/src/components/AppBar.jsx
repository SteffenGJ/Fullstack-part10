import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from "./AppBarTab";
import Constants from 'expo-constants';
import theme from '../theme';

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
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab style={styles.tab} title="Repositories" to="/"/>
      <AppBarTab style={styles.tab} title="Sign in" to="/signin"/>
    </ScrollView>
  </View>
  );
};

export default AppBar;