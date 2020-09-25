import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {services} from '../services/Settings';

const DoctorServices = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <MaterialCommunityIcons name="doctor" size={20} color="#32b6a6" />
      <Text style={styles.title}>Doctor's services</Text>
    </View>
    <View style={styles.services}>
      {services &&
        services.map((service) => (
          <TouchableOpacity style={styles.serviceContainer}>
            <Text style={styles.buttonText}>{service}</Text>
          </TouchableOpacity>
        ))}
    </View>
  </View>
);

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
    paddingLeft: 20,
  },
  title: {
    fontWeight: '300',
    fontSize: 15,
  },
  services: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceContainer: {
    paddingLeft: 25,
    paddingRight: 20,
    paddingVertical: 2,
    marginLeft: 5,
    backgroundColor: '#4288dd',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default DoctorServices;
