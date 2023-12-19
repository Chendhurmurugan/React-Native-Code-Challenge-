import React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './Routes/TabNavigator';
import {StyleSheet, View} from 'react-native';

function App() {

  return (
    <View style={styles.appView}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
});

export default App;
