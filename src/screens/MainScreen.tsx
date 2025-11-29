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
  
};


export default MainScreen;
