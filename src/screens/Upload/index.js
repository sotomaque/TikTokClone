import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

import styles from './styles';

const Upload = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const camera = React.useRef();

  const handleRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      console.log(data);
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
