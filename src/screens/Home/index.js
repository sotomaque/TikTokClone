import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

import Post from '../../components/Post';

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listPosts));
        console.log(res);
        setPosts(res?.data.listPosts.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default Home;
