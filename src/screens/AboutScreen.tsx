import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>About</Text>

        {/* Team section — already added */}
        <View style={styles.teamSection}>
          <Text style={styles.groupTitle}>Group 10</Text>

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

        {/* App info — added in this commit */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About This Application</Text>
          <Text style={styles.description}>
            This Currency Converter app allows users to convert amounts between different currencies using real-time exchange rates from the Free Currency API.
          </Text>
          <Text style={styles.description}>Features include:</Text>
          <Text style={styles.feature}>• Real-time currency conversion</Text>
          <Text style={styles.feature}>• Support for multiple currencies</Text>
          <Text style={styles.feature}>• Input validation for currency codes and amounts</Text>
          <Text style={styles.feature}>• Error handling for network issues</Text>
          <Text style={styles.feature}>• Loading indicators during API calls</Text>
          <Text style={styles.feature}>• Clean and intuitive user interface</Text>
        </View>

        {/* Footer placeholder */}
        <View style={styles.section}>
          <Text style={styles.placeholder}>Footer placeholder</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#2196F3', marginBottom: 12 },

  /* Team styles */
  teamSection: { marginBottom: 16 },
  groupTitle: { fontSize: 20, fontWeight: '700', color: '#2196F3', marginBottom: 12 },
  infoRow: { flexDirection: 'row', marginBottom: 8, alignItems: 'center' },
  label: { fontSize: 15, fontWeight: '600', color: '#666', width: 110 },
  value: { fontSize: 15, color: '#333', flex: 1 },
  divider: { height: 1, backgroundColor: '#e0e0e0', marginVertical: 12 },

  /* App info styles */
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 12 },
  description: { fontSize: 15, color: '#555', lineHeight: 22, marginBottom: 12 },
  feature: { fontSize: 14, color: '#666', lineHeight: 24, marginLeft: 8 },

  /* footer / placeholders */
  section: { marginBottom: 12 },
  placeholder: { fontSize: 14, color: '#666' },
});

export default AboutScreen;
