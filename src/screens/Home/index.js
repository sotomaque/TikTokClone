import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';

import Post from '../../components/Post';
import posts from '../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 135}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default Home;
