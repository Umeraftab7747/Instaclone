import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {ImageContainer} from '../Components';
import data from '../data';

export function StoryBoard() {
  return (
    <View style={styles.Container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ImageContainer img={item.image} name={item.name} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: w('100%'),
    height: h('15%'),
    backgroundColor: 'white',
    borderBottomColor: '#0007',
    borderBottomWidth: h('0.1%'),
    justifyContent: 'center',
    paddingLeft: h('0.2%'),
    paddingRight: h('0.2%'),
  },
});
