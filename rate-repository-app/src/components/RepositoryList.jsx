import { FlatList, View, StyleSheet, Text } from 'react-native';
//import useRepositories from '../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem";
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  list: {
    backgroundColor: "#e1e4e8"
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

const {error, data, loading} = useQuery(ALL_REPOSITORIES, {
  fetchPolicy: 'cache-and-network',
});
console.log(useQuery(ALL_REPOSITORIES));

console.log(data);

if (loading) {
  return <Text>Loading...</Text>
}

if (error) {
  return <Text>OHHH NOOO!!!!</Text>
}

data ? console.log(data) : console.log("not yet do");

  const repositoryNodes = data
  ? data.repositories.edges.map(edge => edge.node)
  : [];

  console.log(repositoryNodes);


  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem props={item}/>}
    />
  );
};

export default RepositoryList;