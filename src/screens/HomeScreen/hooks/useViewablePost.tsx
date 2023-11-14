import { useState, useRef } from 'react';
import { ViewToken } from 'react-native';

const useViewablePost = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0 && viewableItems[0].isViewable) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return {
    activePostId,
    onViewableItemsChanged: onViewableItemsChanged.current,
  };
};

export default useViewablePost;
