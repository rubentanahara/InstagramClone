import React from 'react';
import { FlatList, View } from 'react-native';
import comments from '../../assets/data/comments.json';
import SimpleComment from '../../components/Comments/SimpleComment';

const CommentsScreen: React.FC = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => {
          return <SimpleComment comment={item} />;
        }}
        style={{ padding: 10 }}
      />
    </View>
  );
};

export default CommentsScreen;
