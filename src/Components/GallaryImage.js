import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

export function GallaryImage({imge}) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={{uri: imge}} style={styles.img} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: 140,
    height: 140,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
