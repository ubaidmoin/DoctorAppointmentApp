import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const AboutDoctor = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>About the doctor</Text>
    </View>
    <Text style={styles.designation}>Internal Medicine Consultant</Text>
    <View style={{padding: 10}}>
      <Text style={styles.designationDetails}>
        He holds a doctorate in internal diseases
      </Text>
      <Text style={styles.designationDetails}>
        He holds a doctorate in cardiovascular diseases
      </Text>
      <TouchableOpacity style={{marginLeft: 5}}>
        <Text style={styles.buttonText}>More ...</Text>
      </TouchableOpacity>
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
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 20,
  },
  designation: {
    fontSize: 13,
    marginTop: 5,
    color: 'grey',
    marginLeft: 20,
  },
  designationDetails: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
  },
  buttonText: {
    fontWeight: '600',
  },
});

export default AboutDoctor;
