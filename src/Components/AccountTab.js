import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function AccountTab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <Image source={require('../assets/ic1.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.middle}>
        <Image source={require('../assets/ic2.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.right}>
        <Image source={require('../assets/ic3.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: w('100%'),
    height: h('8%'),
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    borderBottomColor: '#0004',
    borderBottomWidth: h('0.1%'),
  },
  left: {
    width: '33.3%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '33.3%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    width: '33.3%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: h('2.6%'),
    fontWeight: 'bold',
  },
  image: {},
});
