import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function PostBottomTab() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon size={35} name="heart-outline" type="ionicon" color="#000" />
      </View>
      <View style={styles.middle}>
        <Icon size={35} name="chatbubble-outline" type="ionicon" color="#000" />
      </View>
      <View style={styles.right}>
        <Icon
          size={35}
          name="file-tray-full-outline"
          type="ionicon"
          color="#000"
        />
      </View>
      <View style={styles.space}></View>
      <View style={styles.spaceend}>
        <Icon size={35} name="bookmark-outline" type="ionicon" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: w('100%'),
    height: h('8%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#0004',
    borderBottomWidth: h('0.2%'),
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
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    // backgroundColor: 'green',
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceend: {
    // backgroundColor: 'orange',
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: h('2.6%'),
    fontWeight: 'bold',
  },
});
