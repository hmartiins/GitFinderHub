import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 15,
  },

  user_image: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#1987d1'
  },

  name: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    maxWidth: 260,
    lineHeight: 24,
    marginVertical: 10,
  },

  hr: {
    borderBottomColor: '#2e2e2e',
    borderBottomWidth: 1,
    marginVertical: 2,
  },

  infoTitle: {
    color: '#ededed',
    fontSize: 18,
    maxWidth: 260,
    lineHeight: 20,
    marginTop: 20,
    marginBottom: 5
  },

  infos: {
    color: '#cccccc',
    fontSize: 15,
    maxWidth: 260,
    lineHeight: 20,
    marginVertical: 12,
  },
})