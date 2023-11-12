import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../assets/data/post.json';
import useViewablePost from './hooks/useViewablePost'; // Custom hook for viewability logic

interface PostItem {
  id: string;
}

const HomeScreen = () => {
  const {activePostId, onViewableItemsChanged} = useViewablePost();

  const renderPost = ({item}: ListRenderItemInfo<PostItem>) => (
    <Post post={item} isVisible={activePostId === item.id} />
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={{itemVisiblePercentThreshold: 70}}
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );
};

export default HomeScreen;
