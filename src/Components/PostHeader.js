import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function PostHeader({profile, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ImageBackground source={require('../assets/c.png')} style={styles.img}>
          <View style={styles.imgcontainer}>
            <Image
              source={{
                uri: profile,
              }}
              style={styles.profileImage}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.middle}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon
          size={25}
          name="ellipsis-horizontal-sharp"
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
    backgroundColor: '#fff',
    flexDirection: 'row',
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: h('2.3%'),
    fontWeight: 'bold',
  },
  headerText2: {
    fontSize: h('2%'),
  },
  imgcontainer: {
    width: 38,
    height: 38,
    backgroundColor: 'black',
    borderRadius: h('10%'),
    overflow: 'hidden',
  },
  img: {
    width: w('12%'),
    height: h('6.5%'),
    resizeMode: 'contain',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
