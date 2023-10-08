import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Post from './src/components/Post/Post';
import post from './src/assets/data/post';
import {IPost} from './src/types/interfaces';
interface IAppProps {
  post: IPost;
}

const App = () => {
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
