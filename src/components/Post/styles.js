import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 50,
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
    marginLeft: 10,
  },
  verticalContainer: {
    alignSelf: 'flex-end',
    height: 250,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  horizonContainer: {
    padding: 10,
    marginBottom: 35,
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
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: '#4c4c4c',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 5,
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
