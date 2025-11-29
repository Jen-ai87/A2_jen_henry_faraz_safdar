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

};


export default MainScreen;
