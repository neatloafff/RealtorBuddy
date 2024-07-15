import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://example.com/logo.png' }} // Replace with your logo URL
        style={styles.logo}
      />
      <Text style={styles.headerText}>RealtorBuddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
