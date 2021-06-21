import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  Profileheader,
  AccountBox,
  Discriptionbox,
  AccountTab,
  GridviewImage,
} from '../Components';
export class Account extends Component {
  render() {
    return (
      <View>
        <Profileheader />
        <AccountBox />
        <Discriptionbox />
        <AccountTab />
        <GridviewImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
