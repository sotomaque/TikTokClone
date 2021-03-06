import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 130,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonsContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    padding: 5,
  },
  verticalContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
  },
  horizonContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  creatorName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  contentDescription: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  musicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  musicImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: '#4c4c4c',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default styles;
