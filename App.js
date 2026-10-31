import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Movie from './components/Movie';

const AllMovies = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require('./img/doctor-sleep.jpg')} />
      <Movie title="Midway" year="2020" icon_name="person-rifle" poster={require('./img/midway.jpg')} />
    </View>
    
  );
};

export default AllMovies;
