import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon size={35} name="camera-outline" type="ionicon" color="#000" />
      </View>
      <View style={styles.middle}>
        <Text style={styles.headerText}>INSTAGRAM</Text>
      </View>
      <View style={styles.right}>
        <Icon
          size={35}
          name="file-tray-full-outline"
          type="ionicon"
          color="#000"
        />
      </View>
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
    // backgroundColor: 'orange',
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    // backgroundColor: 'orange',
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: h('2.6%'),
    fontWeight: 'bold',
  },
});
