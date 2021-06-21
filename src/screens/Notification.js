import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Listbox} from '../Components';
import {w, h} from 'react-native-responsiveness';

export function Notification() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>ACTIVITY</Text>
      <Listbox />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Text: {
    width: '100%',
    fontSize: h('3.5%'),
    paddingTop: h('0.5%'),
    paddingLeft: h('0.5%'),
    fontWeight: 'bold',
  },
});
