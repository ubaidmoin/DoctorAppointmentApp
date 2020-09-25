import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomRatings from './CustomRatings';

const DoctorDetails = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Dr. Ahmed Ali</Text>
    <Text style={styles.designation}>Internal Medicine Doctor</Text>
    <Text style={styles.designationDetails}>
      Consultant of interal medicine & cardiovascular disease
    </Text>
    <View style={styles.stars}>
      <CustomRatings disabled />
    </View>
    <View style={styles.ratingsContainer}>
      <Text
        style={
          styles.ratingsCaption
        }>{`General ratings from ${134} Visitors`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
  },
  name: {
    fontWeight: '300',
    fontSize: 18,
  },
  designation: {
    fontSize: 15,
    marginTop: 5,
  },
  designationDetails: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
  },
  stars: {
    marginTop: 5,
  },
  ratingsContainer: {
    backgroundColor: 'purple',
    paddingTop: 2,
    padding: 5,
    marginTop: 5,
  },
  ratingsCaption: {
    color: '#fff',
    fontSize: 12,
  },
});

export default DoctorDetails;
