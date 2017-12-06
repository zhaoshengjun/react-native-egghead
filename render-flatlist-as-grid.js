import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'A' },
  { key: 'B' },
  { key: 'C' },
  { key: 'D' },
  { key: 'E' },
  { key: 'F' },
  { key: 'G' },
  { key: 'H' },
  { key: 'I' },
  { key: 'J' }
];

const numColumns = 3;
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfLastRow = data.length - numberOfFullRows * numColumns;
  while (numberOfLastRow !== numColumns && numberOfLastRow !== 0) {
    data.push({ key: `blank-${numberOfLastRow}`, empty: true });
    numberOfLastRow++;
  }
  return data;
};
export default class App extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numbColumns)}
        style={style.container}
        renderItem={this.renderItem}
        numColumns={numbColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: '#4d243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemText: {
    color: '#FFF'
  }
});
