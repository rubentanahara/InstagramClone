import React from 'react';
import {FlatList, View} from 'react-native';
import comments from '../../assets/data/comments.json';
import SimpleComment from '../../components/Comments/SimpleComment';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <SimpleComment comment={item} />}
        style={{padding: '10px'}}
      />
    </View>
  );
};

export default CommentsScreen;
