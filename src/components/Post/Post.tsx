import {View, Text, StyleSheet} from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // horizontal
    justifyContent: 'center', // vertical
  },
});

export default Post;
