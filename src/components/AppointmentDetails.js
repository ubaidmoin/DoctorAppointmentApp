import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {availability} from '../services/Settings';

const AppointmentDetails = () => {
  const region = {
    latitude: 37.7650475,
    longitude: -122.390726,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  const renderItem = ({day, available, from, to}, index) => (
    <View key={index} style={{padding: 5}}>
      <View style={styles.itemHeader}>
        <Text style={{color: '#fff'}}>{day}</Text>
      </View>
      <View
        style={
          available ? styles.itemBodyAvailable : styles.itemBodyNotAvailable
        }>
        {available ? (
          <>
            <Text>{`From: ${from}`}</Text>
            <Text>{`To: ${to}`}</Text>
          </>
        ) : (
          <Text style={{color: 'grey'}}>{'Not Available'}</Text>
        )}
      </View>
      <View
        style={
          available ? styles.itemFooterAvailable : styles.itemFooterNotAvailable
        }>
        <Text style={{color: '#fff'}}>Book</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Fee</Text>
          <View style={styles.subtitleContainer}>
            <Fontisto name="dollar" size={15} color="#6191c7" />
            <Text style={styles.subtitle}>{`${2000} Y.R`}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Waiting Time</Text>
          <View style={styles.subtitleContainer}>
            <Entypo name="back-in-time" size={15} color="#6191c7" />
            <Text style={styles.subtitle}>{`${15} - ${30} minutes`}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.locationDetails}>
          <Ionicons name={'md-location-sharp'} color={'#32b6a6'} size={20} />
          <Text style={styles.locationName}>Sanaa, Huda St</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={styles.mapview}
          showsUserLocation
        />
      </View>
      <FlatList
        data={availability}
        horizontal
        keyExtractor={(item, index) => item.id + item.day}
        renderItem={({item, index}) => renderItem(item, index)}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: '300',
    fontSize: 15,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 5,
  },
  locationName: {
    marginLeft: 5,
  },
  locationDetails: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
  },
  mapview: {
    marginTop: 40,
    borderRadius: 10,
    width: '100%',
    height: 100,
    ...StyleSheet.absoluteFillObject,
  },
  flatlist: {
    marginTop: 105,
    paddingHorizontal: 10,
    width: '95%',
  },
  flatlistContainer: {
    marginTop: 10,
  },
  itemHeader: {
    backgroundColor: '#4387dd',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  itemBodyAvailable: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
  },
  itemBodyNotAvailable: {
    paddingVertical: 18.5,
    paddingHorizontal: 13.5,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
  },
  itemFooterAvailable: {
    backgroundColor: '#de2f43',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  itemFooterNotAvailable: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default AppointmentDetails;
