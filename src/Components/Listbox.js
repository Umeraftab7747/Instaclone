import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

import {Icon} from 'react-native-elements';

export function Listbox() {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextContainer}>THIS WEEK</Text>
      {/* 1 */}
      <View style={styles.BoxContainer}>
        <View style={styles.left}>
          <ImageBackground
            source={require('../assets/c.png')}
            style={styles.img}>
            <View style={styles.imgcontainer}>
              <Image
                source={{
                  uri: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
                }}
                style={styles.profileImage}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.middle}>
          <Text style={styles.texxt}>
            Since you follow , abc .... ,you might like ..... etc etc etc
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.FollowButton}>
            <Text style={styles.Text}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2 */}
      <View style={styles.BoxContainer}>
        <View style={styles.left}>
          <ImageBackground
            source={require('../assets/c.png')}
            style={styles.img}>
            <View style={styles.imgcontainer}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSQmNgmTYTxMH-4d_3w-qVK2SeUYhYfqfLg&usqp=CAU',
                }}
                style={styles.profileImage}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.middle}>
          <Text style={styles.texxt}>
            Since you follow , abc .... ,you might like ..... etc etc etc
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.FollowButton}>
            <Text style={styles.Text}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3 */}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: h('15%'),
    // backgroundColor: 'red',
  },
  TextContainer: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: h('2%'),
    paddingTop: h('1%'),
  },
  BoxContainer: {
    // backgroundColor: 'orange',
    width: '100%',
    height: '90%',
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'red',
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    // backgroundColor: 'gold',
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  imgcontainer: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: h('10%'),
    overflow: 'hidden',
  },
  img: {
    width: w('17%'),
    height: h('9.5%'),
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
  texxt: {
    color: 'black',
    fontWeight: '700',
    fontSize: h('2%'),
  },
  FollowButton: {
    backgroundColor: '#5395EA',
    width: '70%',
    height: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('0.5%'),
    marginTop: h('0.5%'),
  },
  Text: {
    fontSize: h('1.9%'),
    fontWeight: 'bold',
    color: 'white',
  },
});
