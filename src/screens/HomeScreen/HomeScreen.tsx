import React, {useState, useRef} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../assets/data/post.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0 && viewableItems[0].isViewable) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <Post post={item} isVisible={activePostId === item.id} />
      )}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
