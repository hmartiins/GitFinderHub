import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },

  description: {
    color: '#9CA3AF',
    fontSize: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  input: {
    height: 60,
    backgroundColor: '#151515',
    color: '#D1D5DB',
    borderWidth: 0.5,
    borderColor: '#6B7280',
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#1987d1',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  buttonIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  copyright: {
    paddingTop: 18,
    color: '#e2e2e2',
  }
})