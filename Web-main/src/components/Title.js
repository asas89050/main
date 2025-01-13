import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      {}
      <Text style={styles.title}>Diabetes care</Text>

      {}
      <Text style={styles.subtitle}>함께 하는 쉬운 건강 관리</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5, 
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default Title;
