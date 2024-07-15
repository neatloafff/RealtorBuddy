import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 RealtorBuddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
});

export default Footer;
