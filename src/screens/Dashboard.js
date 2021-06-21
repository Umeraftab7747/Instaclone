import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Header, StoryBoard, PostContainer} from '../Components';
import {w, h} from 'react-native-responsiveness';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <StoryBoard />
      <PostContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('100%'),
    paddingBottom: h('6%'),
  },
});
