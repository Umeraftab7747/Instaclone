/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function ImageContainer({img, name}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  }, [modalVisible]);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.megacontainer}>
        <ImageBackground source={require('../assets/c.png')} style={styles.img}>
          <View style={styles.container}>
            <Image
              source={{
                uri: img,
              }}
              style={styles.profileImage}
            />
          </View>
        </ImageBackground>
        <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.text}>
          {name}
        </Text>
      </TouchableOpacity>
      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.ModalContainer}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.ModalImage}
          />
        </View>
      </Modal>
      {/* modal */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    backgroundColor: 'black',
    borderRadius: h('10%'),
    overflow: 'hidden',
  },
  img: {
    width: w('20%'),
    height: h('11%'),
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
  ModalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  megacontainer: {
    // backgroundColor: 'red',
    width: w('25%'),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: h('2%'),
    fontWeight: '300',
  },
  ModalContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: h('100%'),
  },
});
