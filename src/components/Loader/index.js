// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Modal, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = (props) => {
  const {loading, ...attributes} = props;
  console.log('falso?', loading)
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
