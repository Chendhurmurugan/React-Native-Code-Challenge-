import React, {useEffect, useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Search from '../../Components/Search';
import {launchList} from '../../service/API/LaunchesApiCall';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const Launches = () => {
  const navigation = useNavigation();
  const [launchSearchText, setLaunchSearchText] = useState('');
  const [launchListData, setLaunchListData] = useState([]);

  useEffect(() => {
    handleLaunchList();
  }, []);


  /*  Search handled from FrontEnd */
  const handleLaunchListSearch = useMemo(() => {
    if (launchListData?.length > 0) {
      const fltrData = launchListData.filter(d =>
        d.name.toLowerCase().includes(launchSearchText.toLowerCase()),
      );
      console.log(fltrData ,"fltrData");
      return fltrData;
    } else {
      return launchListData;
    }
  }, [launchSearchText, launchListData]);
  console.log(handleLaunchListSearch, 'handleLaunchListSearch');
  console.log(launchSearchText ,"launchSearchText");

  const handleLaunchList = async () => {
    const res = await launchList();
    if (res.length > 0) {
      setLaunchListData(res);
    } else {
      setLaunchListData([]);
    }
  };

  const handleCardPress = item => {
    navigation.navigate('launchDetails', {item});
  };

  const renderCard = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <View style={styles.card}>
        <Image source={{uri: item?.links?.patch?.small}} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text
            style={styles.name}
            ellipsizeMode="middle">{`Name:${item?.name}`}</Text>
          <Text style={styles.name}>{`Date : ${moment(item?.date_local).format(
            'YYYY-MM-DD',
          )}`}</Text>
          <Text style={item.success ? styles.nameSuccess : styles.nameFailed}>
            <Text style={{color: '#ede9e9'}}>Launch :</Text>
            {` ${item.success ? 'Success' : 'Failed'}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.RocketContainer}>
      <Search
        searchText={launchSearchText}
        setSearchText={setLaunchSearchText}
        placeholderName={'Launches Name'}
      />
      {launchListData.length > 0 ? (
        <FlatList
          data={handleLaunchListSearch}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          style={{flex: 1}}
        />
      ) : (
        <View>
          <Text style={styles.nodata}>No data available</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nodata: {
    textAlign: 'center',
  },
  RocketContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  nameContainer: {
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 5,
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nameSuccess: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d2ffa5',
  },
  nameFailed: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff0057',
  },
});
export default Launches;
