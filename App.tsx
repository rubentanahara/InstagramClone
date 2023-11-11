import {PortalProvider} from '@gorhom/portal';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import EditProfile from './src/screens/EditProfile';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.app}>
      <PortalProvider>
        <EditProfile />
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  app: {
    marginTop: '20%',
    marginBottom: '10%',
    flex: 1,
  },
});
export default App;
