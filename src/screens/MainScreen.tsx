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

        {/*

        */}
      </View>
    </ScrollView>
  );
};

/*

*/

export default MainScreen;
