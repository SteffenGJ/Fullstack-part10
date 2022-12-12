import { FlatList, View, StyleSheet, Text } from 'react-native';
//import useRepositories from '../hooks/useRepositories';
import SingleRepository from "./SingleRepository";
import { useQuery } from '@apollo/client';
import { SINGLE_REP } from '../graphql/queries';
import { useParams } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  list: {
    backgroundColor: "#e1e4e8"
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryList = () => {
  const {id} = useParams();
  console.log(id);

const {error, data, loading, fetchMore} = useQuery(SINGLE_REP, {
  variables: {repositoryId: id, first: 2},
  fetchPolicy: 'cache-and-network'
});

data && console.log("__________________DATA_____________________", data.repository.reviews.pageInfo)

const handleFetchMore = () => {
  const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

  if (!canFetchMore) {
    return;
  }

  fetchMore({
    variables: {
      after: data.repository.reviews.pageInfo.endCursor,
    },
  });
};

const onEndReached = () => {
  handleFetchMore();
  console.log("REACHED");
}

if (loading) {
  return <Text>Loading...</Text>
}

if (error) {
  return <Text>OHHH NOOO!!!!</Text>
}


// const repositoryNodes = !single ? data
// ? data.repositories.edges.map(edge => edge.node)
// : [] : singleData ? Array(singleData) : [];

const repositoryNodes = data ? Array(data.repository) : [];

  console.log(repositoryNodes);


  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <SingleRepository props={item} onEndReached={onEndReached}/>
      }
    />
  );
};

export default SingleRepositoryList;