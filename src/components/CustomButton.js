import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({text, icon, onPress}) => (
  <>
    {icon ? (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Ionicons name={icon} color={'#000'} size={20} />
        <Text style={{marginLeft: 10}}>{text}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.containerWithoutIcon} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )}
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingRight: 35,
    borderWidth: 1,
    borderColor: '#32b6a6',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerWithoutIcon: {
    padding: 7,
    paddingRight: 35,
    borderWidth: 1,
    borderColor: '#32b6a6',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    color: '#32b6a6',
  },
});

export default CustomButton;
