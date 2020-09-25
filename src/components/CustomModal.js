import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';

const CustomModal = ({isModalVisible, item}) => {
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={isModalVisible}
      animationType="slide"
      propagateSwipe
      style={styles.container}
      hasBackdrop={false}
      coverScreen={false}>
      <View style={styles.modal}>
        <Ionicons
          name={'bookmark-sharp'}
          color={'#32b6a6'}
          size={30}
          style={{position: 'absolute', top: -4, right: 20}}
        />
        {item && (
          <>
            <View style={styles.profile}>
              <Image
                style={styles.image}
                source={require('../assets/user.jpg')}
              />
              <View style={styles.locationDetails}>
                <Text style={styles.text}>{item.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  <Ionicons
                    name={'md-location-sharp'}
                    color={'#32b6a6'}
                    size={20}
                  />
                  <Text>{item.address}</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton text="Call" icon="ios-call-outline" />
              <CustomButton
                text="Chat"
                icon="mail-outline"
                onPress={() => navigation.navigate('Profile')}
              />
              <CustomButton text="Book" />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  modal: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 170,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  locationDetails: {
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CustomModal;
