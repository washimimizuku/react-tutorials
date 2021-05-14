import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          /*
          source={{
            uri: 'https://nypost.com/wp-content/uploads/sites/2/2019/07/travel-matterhorn-mountain.jpg?quality=90&strip=all&w=1236&h=820&crop=1',
          }}
          */
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
