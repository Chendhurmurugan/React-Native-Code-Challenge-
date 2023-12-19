// Import necessary components and libraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import flickerIcon from '../../assets/flickerIcon.png';
import twitterIcon from '../../assets/twitterIcon2.png';
import spaceXmusk from '../../assets/spaceXmusk.png';
import Youtube from '../../assets/utube.png';
import {historyList} from '../../service/API/HistoryApiCall';

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    handleCompanyDetails();
  }, []);
  const openTwitter = () => {
    Linking.openURL(historyData?.links?.twitter);
  };
  const openYouTube = () => {
    Linking.openURL('https://www.youtube.com/spacex');
  };
  const openFlicker = () => {
    Linking.openURL(historyData?.links?.flickr);
  };

  const handleCompanyDetails = async () => {
    const res = await historyList();
    if (res) {
      setHistoryData(res);
    } else {
      setHistoryData([]);
    }
  };

  return (
    <ScrollView style={styles.historyContainer}>
      <View style={styles.header}>
        <Image source={spaceXmusk} style={styles.elonImage} />
      </View>

      <View style={styles.overview}>
        <Text style={styles.summary}>{historyData.summary}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.sectionTitle}>Details :-</Text>
        <Text
          style={
            styles.sectionTitle
          }>{`Spacex Founder : ${historyData.founder}`}</Text>
        <Text
          style={styles.sectionTitle}>{`Spacex Coo : ${historyData.coo}`}</Text>
        <Text
          style={
            styles.sectionTitle
          }>{`Total Employees : ${historyData.employees}`}</Text>
        <Text
          style={
            styles.sectionTitle
          }>{`CTO Propulsion :${historyData.cto_propulsion}`}</Text>
        <Text
          style={
            styles.sectionTitle
          }>{`valuation :${historyData.valuation}`}</Text>
        <Text
          style={
            styles.sectionTitle
          }>{`Area : ${historyData?.headquarters?.state}`}</Text>
      </View>
      {/* Socail Media */}
      <View style={styles.links}>
        <TouchableOpacity style={styles.wikipediaButton} onPress={openYouTube}>
          <Image source={Youtube} style={styles.socailMediaYoutube} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wikipediaButton} onPress={openFlicker}>
          <Image source={flickerIcon} style={styles.socailMediaflickerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTwitter}>
          <Image source={twitterIcon} style={styles.socailMediatwitterIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: 400,
    height: 800,
  },
  historyContainer: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  elonImage: {
    width: 350,
    height: 300,
  },
  companyName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  founder: {
    color: 'gray',
    marginTop: 5,
  },
  overview: {
    padding: 20,
  },
  summary: {
    color: 'white',
  },
  details: {
    padding: 20,
    paddingTop: 5,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    marginRight: 10,
  },
  socailMediaflickerIcon: {
    width: 30,
    height: 30,
  },
  socailMediaYoutube: {
    width: 40,
    height: 40,
  },
  socailMediatwitterIcon: {
    width: 25,
    height: 25,
  },
});

export default History;
