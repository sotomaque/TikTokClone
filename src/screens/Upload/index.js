import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

import styles from './styles';

const Upload = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const camera = React.useRef();
  const navigation = useNavigation();

  const handleRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      if (data) {
        console.log(data);
        navigation.navigate('CreatePost', {
          videoUri: data?.uri,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
      />
      <TouchableOpacity
        onPress={handleRecord}
        style={isRecording ? styles.buttonRecording : styles.button}
      />
    </View>
  );
};

export default Upload;
