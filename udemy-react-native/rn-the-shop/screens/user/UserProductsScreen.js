import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserProductsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>User Products Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProductsScreen;
