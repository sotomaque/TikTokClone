import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const Post = (props) => {
  const {
    post: {id, user, description, song, songImage, likes, comments, shares},
  } = props;

  console.log('props', props);
  console.log('user', user);

  const [paused, setPaused] = React.useState(false);

  const handleVideoPressed = () => {
    setPaused((prev) => !prev);
    console.log('pressed');
  };

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <TouchableWithoutFeedback onPress={handleVideoPressed}>
        <View>
          <Video
            source={{
              uri:
                'https://www.youtube.com/watch?v=ctL8D_RIB0Q&list=PLlUyvnzbn0DC8Iz8v5_mYVVLUE-labHus&index=1&ab_channel=AXVIAXVI',
            }}
            style={styles.video}
            resizeMode={'cover'}
            onError={(e) => console.log(e)}
            repeat={true}
            paused={paused}
          />

          <View style={styles.buttonsContainer}>
            {/* Vertical Side Component */}
            <View style={styles.verticalContainer}>
              {/* User Profile Image */}
              <Image
                style={styles.profileImage}
                source={{
                  uri: user.profileImage,
                }}
              />
              {/* Like */}
              <View style={styles.iconContainer}>
                <AntDesign name={'heart'} size={40} color="white" />
                <Text style={styles.statLabel}>{likes}</Text>
              </View>

              {/* Comment */}
              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statLabel}>{comments}</Text>
              </View>

              {/* Share */}
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={25} color="white" />
                <Text style={styles.statLabel}>{shares}</Text>
              </View>
            </View>

            {/* Horizontal Bottom Component */}
            <View style={styles.horizonContainer}>
              <View>
                {/* Creator name */}
                <Text style={styles.creatorName}>@{user.username}</Text>
                <Text style={styles.contentDescription}>{description}</Text>

                {/* Music Info */}
                <View style={styles.musicContainer}>
                  {/* Icon */}
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  {/* Name */}
                  <Text style={styles.musicName}>{song}</Text>
                </View>
              </View>
              {/* Song Image */}
              <Image
                style={styles.musicImage}
                source={{
                  uri: songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
