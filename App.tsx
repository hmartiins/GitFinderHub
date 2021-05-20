import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

// Ei professor jussimar, como deu pra ver
// eu fiz o app com o template de typescript
// é pq eu já tinha configurado o expo-cli
// para deixar esse template padrão e só 
// percebi isso quando eu estava no meio do projeto.
// Eu resolvi deixar assim pois é assim q eu estou 
// desenvolvendo o app do meu TCC, com TypeScript,
// assim eu acabo treinando e estudando mais para
// o meu TCC =)

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#141414" translucent />
      <Routes />
    </>
  );
};

export default App;
