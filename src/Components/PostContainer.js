import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import data from '../post';
import {Post} from '../Components';

export function PostContainer() {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Post data={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({});
