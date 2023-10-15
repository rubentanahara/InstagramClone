import { FlatList } from 'react-native';
import Post from '../../components/Post/Post';
import posts from '../../assets/data/post.json';
import { FlashList } from "@shopify/flash-list";

const HomeScreen = () => {
    return (
        <FlashList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(item) => item.id.toString()}
            estimatedItemSize={500}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default HomeScreen;
