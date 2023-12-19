import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import wikipediaIcon from '../../assets/wikipediaPng.png';

const RocketView = ({route}) => {
  const {item} = route?.params;
  const openWikipedia = () => {
    Linking.openURL(item?.wikipedia);
  };


  return (
    <View style={styles.container}>
      <Image source={{uri: item?.flickr_images[0]}} style={styles.image} />
      <Text style={styles.name}>{item?.name}</Text>
      <Text style={styles.details}>{item?.description}</Text>
      <TouchableOpacity style={styles.wikipediaButton} onPress={openWikipedia}>
        <Image source={wikipediaIcon} style={styles.wikiIcon} />
        <Text style={styles.wikipediaButtonText}>View on Wikipedia</Text>
      </TouchableOpacity>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  wikiIcon: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  wikipediaButton: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  wikipediaButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RocketView;
