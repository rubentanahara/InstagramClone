import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Post from './src/components/Post/Post';
import post from './src/assets/data/post';

const App = () => {
  console.dir(post);
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <Post post={post} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
