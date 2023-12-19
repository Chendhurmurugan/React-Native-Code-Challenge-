import React, {useEffect, useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Search from '../../Components/Search';
import {rocketsList} from '../../service/API/RocketsApiCall';
import {useNavigation} from '@react-navigation/native';

const Rockets = () => {
  const navigation = useNavigation();
  const [rocketSearchText, setRocketSearchText] = useState('');
  const [rocketListData, setRocketListData] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    handleRockList();
  }, []);

  /*  Search handled by FrontEnd */
  const handleRocketListSearch = useMemo(() => {
    if (rocketSearchText?.length > 0) {
      const temp = rocketListData.filter(d =>
        d.name.toLowerCase().includes(rocketSearchText.toLowerCase()),
      );
      return temp;
    } else {
      return rocketListData;
    }
  }, [rocketSearchText, rocketListData]);

  const handleRockList = async () => {
    const res = await rocketsList();
    if (res.length > 0) {
      setRocketListData(res);
    } else {
      setRocketListData([]);
    }
  };

  const handleCardPress = item => {
    navigation.navigate('rocketDetails', {item});
  };

  const renderCard = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <View style={styles.card}>
        <Image source={{uri: item?.flickr_images[0]}} style={styles.image} />
        <Text style={styles.name}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.RocketContainer}>
      <Search
        searchText={rocketSearchText}
        setSearchText={setRocketSearchText}
        placeholderName={'Rockets Name'}
      />
      {rocketListData.length > 0 ? (
        <FlatList
          data={handleRocketListSearch}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
          numColumns={screenWidth < 600 ? 3 : 4}
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
  card: {
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 10,
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
});
export default Rockets;
