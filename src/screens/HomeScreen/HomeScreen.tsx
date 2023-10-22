import React, { useState, useRef } from 'react';
import { ViewabilityConfig, ViewToken } from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../assets/data/post.json';
import { FlashList } from "@shopify/flash-list";

const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<string | null>(null);

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
    };

    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
            if (viewableItems.length > 0) {
                setActivePostId(viewableItems[0].item.id);
            }
        },
    );

    return (
        <FlashList
            data={posts}
            renderItem={({ item }) =>
                <Post post={item} isVisible={activePostId === item.id} />
            }
            keyExtractor={(item) => item.id.toString()}
            estimatedItemSize={500}
            showsVerticalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged.current}
        />
    );
};

export default HomeScreen;
