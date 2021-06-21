import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PostHeader, PostImage, PostBottomTab} from '../Components';

export function Post({data}) {
  return (
    <View>
      <PostHeader name={data.name} profile={data.profile} />
      <PostImage img={data.image} />
      <PostBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({});
