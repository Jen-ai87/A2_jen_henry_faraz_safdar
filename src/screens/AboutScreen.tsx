import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>About</Text>

        {/* Placeholder: Team section (will be split into its own component later) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team</Text>
          <Text style={styles.placeholder}>Team section placeholder</Text>
        </View>

        {/* Placeholder: App info (will be split into its own component later) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Info</Text>
          <Text style={styles.placeholder}>App info & features placeholder</Text>
        </View>

        {/* Placeholder: Footer (will be split into its own component later) */}
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
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 6 },
  placeholder: { fontSize: 14, color: '#666' },
});

export default AboutScreen;
