import React, { useState } from 'react';

import { Alert, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  function handleNavigateToProfile() {
    if (username) {
      navigation.navigate('Profile', { username });
    } else {
      Alert.alert(
        'Digite algo', 
        'Digite algo no input para podermos pesquisar 😃'
      );
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.description}>
          Digite um username do GitHub:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCorrect={false}
          placeholderTextColor="#6B7280"
          selectionColor="#6B7280"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <RectButton style={styles.button} onPress={handleNavigateToProfile}>
          <Text style={styles.buttonText}>Ver Perfil</Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={18} />
            </Text>
          </View>
        </RectButton>

        <Text style={styles.copyright}>Feito por © Henrique Martins</Text>
      </View>
      <Text style={{ 
        color: 'white',
        textAlign: 'center'
      }}>
        Trabalho de PAMIII da Etec de Peruíbe
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Home;
