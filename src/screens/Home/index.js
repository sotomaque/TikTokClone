import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post = {
  id: 'p1',
  videoUri: '',
  user: {
    id: 'u1',
    username: 'esotomay',
    profileImageUri: 'https://picsum.photos/200/300',
  },
  description: 'lolz',
  songName: 'paparazzi - eboys',
  songImageUri: 'https://picsum.photos/200/300',
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default Home;
