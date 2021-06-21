import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';
import {Follower} from '../Components';

export function AccountBox() {
  return (
    <View style={styles.Container}>
      {/* left with image */}
      <View style={styles.left}>
        <ImageBackground source={require('../assets/c.png')} style={styles.img}>
          <View style={styles.Imgcontainer}>
            <Image
              source={{
                uri: 'https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_ohc=9S_kTnfSlTQAX9rjEpJ&edm=ABfd0MgBAAAA&ccb=7-4&oh=fa01aa0859d9ef669eca958813ec14e3&oe=60D66D7C&_nc_sid=7bff83',
              }}
              style={styles.profileImage}
            />
          </View>
        </ImageBackground>
      </View>
      {/* right for button  */}
      <View style={styles.Right}>
        <Follower />
        <TouchableOpacity style={styles.FollowButton}>
          <Text style={styles.Text}>Follow</Text>
        </TouchableOpacity>
      </View>
      {/* discription */}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: w('100%'),
    height: h('20%'),
    // backgroundColor: 'grey',
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'red',
    width: '35%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: h('2%'),
  },
  Imgcontainer: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: h('10%'),
    overflow: 'hidden',
  },
  img: {
    width: w('29.5%'),
    height: h('16%'),
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
  Right: {
    // backgroundColor: 'orange',
    width: '65%',
    height: '100%',
    alignItems: 'center',
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
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: 'white',
  },
});
