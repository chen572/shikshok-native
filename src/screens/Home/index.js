import React from 'react';
import {Dimensions, FlatList, View, StyleSheet} from 'react-native';

import TopBar from '../../components/Video/TopBar/TopBar';
import BackgroundVideo from '../../components/Video/BackgroundVideo/BackgroundVideo';
import BottomTabNavigator from '../../components/BottomTabNavigator/BottomTabNavigator';

const videos = [
  'https://tiktok-test1212.s3-eu-west-1.amazonaws.com/nike1.mp4',
  'https://tiktok-test1212.s3-eu-west-1.amazonaws.com/nike2.mp4',
  'https://tiktok-test1212.s3-eu-west-1.amazonaws.com/nike3.mp4',
];

function Home({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <FlatList
        snapToAlignment="start"
        snapToInterval={Dimensions.get('window').height}
        decelerationRate="fast"
        pagingEnabled
        initialNumToRender={1}
        data={videos}
        keyExtractor={(videoUrl) => videoUrl}
        renderItem={({item}) => <BackgroundVideo videoUrl={item} />}
      />
      <BottomTabNavigator
        background="transparent"
        colorIcon="#FFF"
        colorTitle="#FFF"
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Home;
