import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Data from '../account';
import {GallaryImage} from '../Components';
import {w, h} from 'react-native-responsiveness';

const numofcolm = 3;
export function GridviewImage() {
  return (
    <View style={styles.Container}>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <GallaryImage imge={item.image} />}
        keyExtractor={item => item.id}
        numColumns={numofcolm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: w('100%'),
    height: h('100%'),
    paddingBottom: '2%',
  },
});
