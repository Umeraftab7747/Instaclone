import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {w, h} from 'react-native-responsiveness';

export function SearchHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.Container2}>
        <View style={styles.LogoContainer}>
          <Icon name={'search-sharp'} type="ionicon" size={30} color="#0004" />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder={'search'}
          placeholderTextColor={'#0004'}
        />
      </View>
      <Icon name="scan-sharp" type="ionicon" size={40} color={'#000'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: h('10%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  Container2: {
    width: '80%',
    height: '60%',
    flexDirection: 'row',
    backgroundColor: '#0001',
    borderRadius: h('1%'),
    paddingLeft: h('1%'),
  },
  TextInput: {
    width: '90%',
    height: '100%',
    color: '#fff',
  },
  LogoContainer: {
    width: '13%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
