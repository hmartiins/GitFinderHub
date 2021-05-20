import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { 
  Image, 
  Text,
  View,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface IParams {
  username: string;
}

interface IUserInfo {
  login?: string;
  name?: string;
  bio?: string;
  followers?: number;
  following?: number;
  company?: string;
  public_repos?: number;
  location?: string;
  repos_url?: string;
  organizations_url?: string;
  html_url?: string;
  avatar_url?: string;

  message?: string;
}

const Profile: React.FC = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const routeParams = route.params as IParams;
  const { username } = routeParams;

  useEffect(() => {
    async function apiGetData() {
      try {
        await api.get(username)
          .then((response) => setUserInfo(response.data))
      } catch (err) {
        Alert.alert(
          'Oops 😢',
          'O username digitado, não condiz com nenhum username cadastrado no Github !!'
        );
  
        navigation.navigate('Home');
      }
    }

    apiGetData();
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.user_image}
          source={{
            uri: userInfo?.avatar_url,
          }}
        />

        <Text style={styles.name}>{userInfo?.name}</Text>

        <View style={styles.hr} />

        <Text style={styles.infoTitle}>Infos:</Text>

        <ScrollView>
          <Text style={styles.infos}>Username: {userInfo?.login}</Text>
          <Text style={styles.infos}>Bio: {userInfo?.bio}</Text>
          <Text style={styles.infos}>Seguidores: {userInfo?.followers}</Text>
          <Text style={styles.infos}>Seguindo: {userInfo?.following}</Text>
          <Text style={styles.infos}>Companhia: {userInfo?.company}</Text>
          <Text style={styles.infos}>
            Repositórios públicos: {userInfo?.public_repos}
          </Text>
          <Text style={styles.infos}>Localização: {userInfo?.location}</Text>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
