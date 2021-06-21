import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function PostImage({img}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imge}
        source={{
          uri: img,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: h('35%'),
    width: w('100%'),
    backgroundColor: 'black',
  },
  imge: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
