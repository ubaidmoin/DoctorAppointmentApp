import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Map from '../components/Map';
import {googleMapsKey, region} from '../services/Settings';

const Home = () => {
  return <Map />;
};

export default Home;
