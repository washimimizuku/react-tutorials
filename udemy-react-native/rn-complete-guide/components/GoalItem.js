import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.uid)}
    >
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  itemText: {
    color: '#444',
  },
});

export default GoalItem;
