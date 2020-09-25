import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import DoctorDetails from '../components/DoctorDetails';
import AppointmentDetails from '../components/AppointmentDetails';
import AboutDoctor from '../components/AboutDoctor';
import DoctorServices from '../components/DoctorServices';

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topCard}>
          <DoctorDetails />
        </View>
        <View style={styles.card}>
          <AppointmentDetails />
        </View>
        <View style={styles.card}>
          <AboutDoctor />
        </View>
        <View style={styles.card}>
          <DoctorServices />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  topCard: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
  card: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
});

export default Profile;
