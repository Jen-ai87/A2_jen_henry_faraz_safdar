import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>About</Text>

        {/* Team section — added details in this commit */}
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

        {/* App info placeholder  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Info</Text>
          <Text style={styles.placeholder}>App info & features placeholder</Text>
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

  /* Team styles added */
  teamSection: { marginBottom: 16 },
  groupTitle: { fontSize: 20, fontWeight: '700', color: '#2196F3', marginBottom: 12 },
  infoRow: { flexDirection: 'row', marginBottom: 8, alignItems: 'center' },
  label: { fontSize: 15, fontWeight: '600', color: '#666', width: 110 },
  value: { fontSize: 15, color: '#333', flex: 1 },
  divider: { height: 1, backgroundColor: '#e0e0e0', marginVertical: 12 },

  /* existing placeholders/styles */
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 6 },
  placeholder: { fontSize: 14, color: '#666' },
});

export default AboutScreen;
