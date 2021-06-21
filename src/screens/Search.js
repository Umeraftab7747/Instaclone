import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SearchHeader, GridviewImage} from '../Components';

export class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchHeader />
        <GridviewImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
