import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function Discriptionbox() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Discriptiontext}>
        https://www.instagram.com/umer.dev.account/
      </Text>
      <Text style={styles.Discriptiontext}>
        https://github.com/Umeraftab7747
      </Text>
      <Text style={styles.Discriptiontext}>Umeraftab7747@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('10%'),
    borderBottomWidth: h('0.2%'),
    borderBottomColor: '#0002',
    paddingLeft: h('2%'),
    paddingRight: h('2%'),
  },
  Discriptiontext: {
    color: '#000',
    fontWeight: '500',
    fontSize: h('2.2%'),
  },
});
