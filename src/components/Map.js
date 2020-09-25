import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {googleMapsKey, region as r} from '../services/Settings';

import CustomModal from './CustomModal';

const Map = () => {
  const [region, setRegion] = useState(r);
  const [clinics, setClinics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const findClinics = () => {
    let markers = [];
    let places = [];
    var key = googleMapsKey;
    let clinic = 'hospital';

    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${key}&input=${clinic}&location=${region.latitude},${region.longitude}&radius=200`,
    )
      .then((response) => response.json())
      .then((res) => {
        places = res.predictions;
        places.forEach((place) => {
          fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&key=${key}`,
          )
            .then((r) => r.json())
            .then((re) => {
              markers.push({
                latitude: re.result.geometry.location.lat,
                longitude: re.result.geometry.location.lng,
                name: re.result.name,
                address: place.terms[0].value + ' ' + place.terms[1].value,
                phone: re.result.formatted_phone_number,
              });
              setClinics(markers);
              console.log(markers);
              setLoading(false);
            });
        });
      });
  };

  const handleMarkerOnPress = (index) => {
    let data = [...clinics];
    let item = data[index];
    console.log(item);
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  useEffect(() => {
    findClinics();
  });

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.mapview}
        showsUserLocation>
        {clinics &&
          clinics.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => handleMarkerOnPress(index)}>
              <View style={styles.markerView}>
                <MaterialCommunityIcons
                  name={'doctor'}
                  color={'#32b6a6'}
                  size={40}
                />
                <Text style={styles.markerTitle}>{marker.name}</Text>
              </View>
            </Marker>
          ))}
      </MapView>
      <CustomModal isModalVisible={isModalVisible} item={selectedItem} />
    </>
  );
};

const styles = StyleSheet.create({
  mapview: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  markerTitle: {
    fontWeight: 'bold',
  },
  markerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
