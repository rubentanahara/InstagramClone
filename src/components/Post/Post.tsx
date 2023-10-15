import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Comment from '../Comment';
import { IPost } from '../../types/interfaces';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IPostProps {
    post: IPost;
    isVisible: boolean;
}

const Post = ({ post, isVisible }: IPostProps) => {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(post.nofLikes);
    const [comments, setComments] = useState(post.nofComments);
    const [isLargeDescription, setIsLargeDescription] = useState(false);

    const handleDoubleLike = () => {
        if (liked) return;
        setLiked(prev => !prev);
        setLikes(prev => prev + 1);
    }
    const handleLike = () => {
        setLiked(prev => !prev);
        setLikes(prev => prev + (liked ? -1 : 1));
    }
    let content;
    if (post.image) {
        content = (
            <DoublePressable onDoublePress={handleDoubleLike}>
                <Image
                    source={{
                        uri: post.image,
                    }}
                    style={styles.image}
                />
            </DoublePressable>
        );
    } else if (post.images) {
        content = <Carousel images={post.images} onDoublePress={handleDoubleLike} />;
    } else if (post.video) {
        content = <VideoPlayer uri={post.video} paused={!isVisible} />
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.userAvatar}
                    source={{
                        uri: post.user.image,
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{post.user.username}</Text>
                    <Text style={styles.location}>{post?.location}</Text>
                </View>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    style={styles.threeDots}
                />
            </View>
            {content}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <AntDesign
                        name={liked ? 'heart' : 'hearto'}
                        size={24}
                        style={styles.icon}
                        color={liked ? colors.accent : colors.black}
                        onPress={handleLike} />
                    <Ionicons
                        name="chatbubble-outline"
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                    <Feather
                        name="send"
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                    <Ionicons
                        name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                        size={24}
                        style={{ marginLeft: 'auto' }}
                        color={colors.black}
                        onPress={() => { setBookmarked(prev => !prev) }}
                    />
                </View>
                <Text>
                    Liked by <Text style={styles.bold}> someone </Text> and{' '}
                    <Text style={styles.bold}> {likes} others</Text>
                </Text>
                {/** Caption */}
                <Text numberOfLines={isLargeDescription ? 0 : 3} style={styles.caption}>
                    <Text style={styles.bold}>{post.user.username}</Text>
                    {' '}
                    {post?.description}{' '}
                </Text>
                <Text
                    onPress={() => setIsLargeDescription(prev => !prev)}>
                    {isLargeDescription ? 'less' : 'more'}
                </Text>
                {/** Comments */}
                <Text style={styles.viewComments}>
                    {`View all ${comments} comments`}
                </Text>
                {post.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                {/** Post date */}
                <Text style={styles.viewComments}>{post.createdAt}</Text>
            </View>
        </View>
    );
};

export default Post;
