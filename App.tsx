import {PortalProvider} from '@gorhom/portal';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.app}>
      <PortalProvider>
        <HomeScreen />
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  app: {
    marginTop: '15%',
    flex: 1,
  },
});
export default App;
