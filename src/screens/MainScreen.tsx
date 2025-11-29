import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import LabeledInput from '../components/LabeledInput';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface MainScreenProps {
  navigation: MainScreenNavigationProp;
}

const API_KEY = 'fca_live_RCWy616u2328IhnKwW2UWoaeUjAZ2DSgCC3ci4X5';
const API_URL = 'https://api.freecurrencyapi.com/v1/latest';

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [destCurrency, setDestCurrency] = useState('');
  const [amount, setAmount] = useState('1');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    convertedAmount: string;
    exchangeRate: string;
  } | null>(null);
  const [error, setError] = useState('');

  const validateCurrencyCode = (code: string): boolean => {
    const regex = /^[A-Z]{3}$/;
    return regex.test(code);
  };

  const validateAmount = (amt: string): boolean => {
    const num = parseFloat(amt);
    return !isNaN(num) && num > 0;
  };

  const handleConvert = async () => {
    setError('');
    setResult(null);

    // Validate inputs
    if (!validateCurrencyCode(baseCurrency)) {
      setError('Base currency must be a 3-letter uppercase ISO code (e.g., CAD, USD)');
      return;
    }

    if (!validateCurrencyCode(destCurrency)) {
      setError('Destination currency must be a 3-letter uppercase ISO code (e.g., USD, EUR)');
      return;
    }

    if (!validateAmount(amount)) {
      setError('Amount must be a positive number');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}&currencies=${destCurrency}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Check for API errors
      if (data.error || data.errors) {
        throw new Error(data.error?.message || 'API returned an error');
      }

      // Validate response structure
      if (!data.data || !data.data[destCurrency]) {
        throw new Error(`Exchange rate not found for ${destCurrency}`);
      }

      const exchangeRate = data.data[destCurrency];
      const amountNum = parseFloat(amount);
      const convertedAmount = (amountNum * exchangeRate).toFixed(2);

      setResult({
        convertedAmount,
        exchangeRate: exchangeRate.toFixed(4),
      });
    } catch (err: any) {
      let errorMessage = 'Failed to fetch exchange rate';

      if (err.message.includes('Network request failed')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (err.message.includes('Invalid API key')) {
        errorMessage = 'Invalid API key. Please check configuration.';
      } else if (err.message.includes('not found')) {
        errorMessage = `Currency ${destCurrency} not found or not supported.`;
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Convert Your Currency</Text>

        <LabeledInput
          label="Base Currency Code"
          value={baseCurrency}
          onChangeText={setBaseCurrency}
          placeholder="e.g., CAD, USD, EUR"
          autoCapitalize="characters"
        />

        <LabeledInput
          label="Destination Currency Code"
          value={destCurrency}
          onChangeText={setDestCurrency}
          placeholder="e.g., USD, EUR, GBP"
          autoCapitalize="characters"
        />

        <LabeledInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter amount"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleConvert}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Convert</Text>
          )}
        </TouchableOpacity>

        {error !== '' && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Conversion Result</Text>
            <Text style={styles.resultText}>
              {amount} {baseCurrency} = {result.convertedAmount} {destCurrency}
            </Text>
            <Text style={styles.rateText}>
              Exchange Rate: 1 {baseCurrency} = {result.exchangeRate} {destCurrency}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.aboutButtonText}>About This App</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#90CAF9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  errorText: {
    color: '#C62828',
    fontSize: 14,
  },
  resultContainer: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  rateText: {
    fontSize: 14,
    color: '#388E3C',
  },
  aboutButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  aboutButtonText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
  },
});


export default MainScreen;
