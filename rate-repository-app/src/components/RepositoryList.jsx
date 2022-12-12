import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import {useState} from "react";
import { Picker } from '@react-native-picker/picker';

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

  const [direction, setDirection] = useState("DESC");
  const [by, setBy] = useState("CREATED_AT");

  const {repositories, fetchMore, loading} = useRepositories({
    first: 8,
    orderDirection: direction, 
    orderBy: by
  })

/*const {error, data, loading} = useQuery(ALL_REPOSITORIES, {
  variables: {orderDirection: direction, orderBy: by},
  fetchPolicy: 'cache-and-network',
});*/

const Select = () => {

  const [value, setValue] = useState("");

console.log(value);

  const onChange = (itemValue) => {
    console.log(itemValue);

    setValue(itemValue);
    console.log(value);

    if(itemValue === "latest") {
      setDirection("DESC");
      setBy("CREATED_AT");
    } else if (itemValue === "highest") {
      setDirection("DESC");
      setBy("RATING_AVERAGE");
    } else if (itemValue === "lowest") {
      setDirection("ASC");
      setBy("RATING_AVERAGE");
    } else {
      console.log("SOMETHING HAS GONE TERRIBLY WRONG!!");
    }
  }

  return (
  <View>
    <Picker
      selectedValue={value}
      onValueChange={onChange}
    >
      <Picker.Item label="Choose an item...." value="non"/>
      <Picker.Item label="Latest repoistories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest"/>
      <Picker.Item label="Lowest rated repository" value="lowest"/>
    </Picker>
  </View>
  )
}

const navigate = useNavigate();

if (loading) {
  return <Text>Loading...</Text>
}


/*const repositoryNodes = data
? data.repositories.edges.map(edge => edge.node)
: [];*/
const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node)
: [];

  const handlePress = (id) => {
    console.log("PRESS")
    navigate(`/repositories/${id}`)
  }

  const onEndReached = () => {
    fetchMore();
  }

  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <Select/>}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => 
        <RepositoryItem props={item} handlePress={handlePress}/>
      }
    />
  );
};

export default RepositoryList;