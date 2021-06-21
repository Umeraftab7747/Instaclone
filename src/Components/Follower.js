import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function Follower() {
  return (
    <View style={styles.Container}>
      <View style={styles.Followerbox}>
        <Text style={styles.NumbeTxt}>1.234</Text>
        <Text style={styles.wordTxt}>posts</Text>
      </View>
      <View style={styles.Followerbox}>
        <Text style={styles.NumbeTxt}>9.999</Text>
        <Text style={styles.wordTxt}>followers</Text>
      </View>
      <View style={styles.Followerbox}>
        <Text style={styles.NumbeTxt}>111</Text>
        <Text style={styles.wordTxt}>following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: h('10%'),
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  Followerbox: {
    // backgroundColor: 'gold',
    width: '30%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NumbeTxt: {
    fontSize: h('2.8%'),
    fontWeight: 'bold',
  },
  wordTxt: {
    fontSize: h('2%'),
    color: '#0005',
  },
});
