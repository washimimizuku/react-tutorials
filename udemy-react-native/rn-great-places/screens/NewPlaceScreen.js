import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

import Colors from '../constants/Colors';

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState('');

  const titleChangeHandler = (text) => {
    // We could add validation
    setTitleValue(text);
  };

  const savePlaceHanfler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.lable}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHanfler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
