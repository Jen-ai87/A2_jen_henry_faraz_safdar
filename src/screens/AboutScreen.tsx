import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Group 10</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Jen Henry</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Student ID:</Text>
            <Text style={styles.value}>101234567</Text>
          </View>

          <View style={styles.divider} />
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Faraz Safdar</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Student ID:</Text>
            <Text style={styles.value}>100775883</Text>
          </View>
          
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About This Application</Text>
          <Text style={styles.description}>
            This Currency Converter app allows users to convert amounts between different currencies using real-time exchange rates from the Free Currency API.
          </Text>
          <Text style={styles.description}>
            Features include:
          </Text>
          <Text style={styles.feature}>• Real-time currency conversion</Text>
          <Text style={styles.feature}>• Support for multiple currencies</Text>
          <Text style={styles.feature}>• Input validation for currency codes and amounts</Text>
          <Text style={styles.feature}>• Error handling for network issues</Text>
          <Text style={styles.feature}>• Loading indicators during API calls</Text>
          <Text style={styles.feature}>• Clean and intuitive user interface</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>COMP3074 Mobile App Development</Text>
          <Text style={styles.footerText}>Assignment 2 - React Native</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    width: 100,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  teamMember: {
    marginBottom: 12,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 12,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 13,
    color: '#999',
    marginBottom: 4,
  },
});

export default AboutScreen;
