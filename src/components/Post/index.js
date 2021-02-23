import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const Post = (props) => {
  const [post, setPost] = React.useState(props.post);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleVideoPressed = () => {
    setIsPaused((prev) => !prev);
    console.log('pause pressed');
  };

  const handleLikePressed = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleVideoPressed}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            style={styles.video}
            resizeMode={'cover'}
            onError={(e) => console.log(e)}
            repeat={true}
            paused={isPaused}
          />
          <View style={styles.buttonsContainer}>
            {/* Vertical Side Component */}
            <View style={styles.verticalContainer}>
              {/* User Profile Image */}
              <Image
                style={styles.profileImage}
                source={{
                  uri: post.user.profileImageUri,
                }}
              />
              {/* Like */}
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handleLikePressed}>
                <AntDesign
                  name={'heart'}
                  size={40}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.statLabel}>{post.likes}</Text>
              </TouchableOpacity>

              {/* Comment */}
              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statLabel}>{post.comments}</Text>
              </View>

              {/* Share */}
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={25} color="white" />
                <Text style={styles.statLabel}>{post.shares}</Text>
              </View>
            </View>

            {/* Horizontal Bottom Component */}
            <View style={styles.horizonContainer}>
              <View>
                {/* Creator name */}
                <Text style={styles.creatorName}>@{post.user.username}</Text>
                <Text style={styles.contentDescription}>
                  {post.description}
                </Text>

                {/* Music Info */}
                <View style={styles.musicContainer}>
                  {/* Icon */}
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  {/* Name */}
                  <Text style={styles.musicName}>{post.songName}</Text>
                </View>
              </View>
              {/* Song Image */}
              <Image
                style={styles.musicImage}
                source={{
                  uri: post.songImageUri,
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
