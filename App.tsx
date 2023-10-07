import {SafeAreaView, View} from 'react-native';
import Post from './src/components/Post/Post';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Post />
    </SafeAreaView>
  );
};
export default App;
