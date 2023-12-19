import React, {useState} from 'react';
import searchIcon from '../assets/searchIcon.png';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const Search = ({searchText, setSearchText , placeholderName}) => {
  const handleSearch = text => {
    setSearchText(text);
  };
  return (
    <View style={styles.SearchContainter}>
      <Image source={searchIcon} style={styles.iconStyle} />
      <TextInput
        type="text"
        placeholder={`Search ${placeholderName}...`}
        style={styles.HeaderText}
        onChangeText={text => {
          handleSearch(text);
        }}
        value={searchText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  SearchContainter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    gap: 5,
    borderRadius: 15,
    margin: 10,
    padding: 3,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  HeaderText: {
    fontSize: 17,
    padding: 10,
    fontStyle: 'normal',
    color: '#ede9e9',
    paddingLeft: 10,
  },
});
export default Search;
