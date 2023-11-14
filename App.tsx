import { PortalProvider } from '@gorhom/portal';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EditProfile from './src/screens/EditProfile';
import styles from './styles';

const App = () => (
  <GestureHandlerRootView style={styles.app}>
    <PortalProvider>
      <EditProfile />
    </PortalProvider>
  </GestureHandlerRootView>
);

export default App;
