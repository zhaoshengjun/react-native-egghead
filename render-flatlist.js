import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'A' },
  { key: 'B' },
  { key: 'C' },
  { key: 'D' },
  { key: 'E' },
  { key: 'F' }
];

const numColumns = 3;
export default class App extends React.Component {
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={data}
        style={style.container}
        renderItem={this.renderItem}
      />
    );
  }
}
