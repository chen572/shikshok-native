import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  bottomTabIconContainer: {
    width: '20%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabTitle: {
    fontSize: 10,
  },
  BottomAddIconContainer: {
    width: '70%',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderRadius: 10,
    borderLeftColor: '#69c9d0',
    borderRightColor: '#ee1d52',
    backgroundColor: '#fff',
  },
});
