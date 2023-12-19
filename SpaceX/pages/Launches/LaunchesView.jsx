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
import articleIcon from '../../assets/article.png';
import youtubeIcon from '../../assets/youtube.png';

const LaunchesView = ({route}) => {
  const {item} = route?.params;
  console.log(item, '&&item');

  const openWikipedia = () => {
    Linking.openURL(item?.links?.wikipedia);
  };
  const openYouTube = () => {
    Linking.openURL(item?.links?.webcast);
  };
  const openArticle = () => {
    Linking.openURL(item?.links?.article);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: item?.links?.patch?.small}} style={styles.image} />
      <Text style={styles.name}>{`Name:${item?.name}`}</Text>
      <Text style={styles.details}>{item?.details}</Text>
      <View style={styles.socialLinks}>
        <TouchableOpacity
          style={styles.wikipediaButton}
          onPress={openWikipedia}>
          <Image source={wikipediaIcon} style={styles.wikiIcon} />
          <Text style={styles.wikipediaButtonText}>Wikipedia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wikipediaButton} onPress={openYouTube}>
          <Image source={youtubeIcon} style={styles.wikiIcon} />
          <Text style={styles.wikipediaButtonText}>Youtube</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wikipediaButton}  onPress={openArticle}>
          <Image source={articleIcon} style={styles.wikiIcon} />
          <Text style={styles.wikipediaButtonText}>Article</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
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
    textAlign: 'left',
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
  socialLinks: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default LaunchesView;
