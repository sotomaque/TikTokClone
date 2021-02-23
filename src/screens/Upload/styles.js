import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4343',
    marginVertical: 10,
  },
  buttonRecording: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: '#ff4343',
    marginVertical: 20,
  },
});

export default styles;
