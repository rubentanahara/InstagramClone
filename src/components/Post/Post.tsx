import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import com from '../../assets/data/comments.json';
import colors from '../../assets/theme/colors';
import {IPost} from '../../types/interfaces';
import Carousel from '../Carousel';
import {FullComment} from '../Comments';
import SimpleComment from '../Comments/SimpleComment';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';
import styles from './styles';

interface IPostProps {
  post: IPost;
  isVisible: boolean;
}

const Post = ({post, isVisible}: IPostProps) => {
  // this is are the states for the post
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.nofLikes);
  const [comments] = useState(post.nofComments);
  const [isLargeDescription, setIsLargeDescription] = useState(false);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['80%', '100%'], []);

  // this is the handler for the double press
  const handleDoubleLike = () => {
    if (liked) return;
    setLiked(prev => !prev);
    setLikes(prev => prev + 1);
  };
  // this is the handler for the single press
  const handleLike = () => {
    setLiked(prev => !prev);
    setLikes(prev => prev + (liked ? -1 : 1));
  };
  // renders
  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <View>
          <Text>Footer</Text>
        </View>
      </BottomSheetFooter>
    ),
    [],
  );

  const emojis = [
    '❤️', // Red Heart
    '🙌', // Raising Hands
    '🔥', // Fire
    '👏', // Clapping Hands
    '😢',
    '😍', // Smiling Face with Heart-Eyes
    '😮',
    '😂', // Face with Tears of Joy
  ];

  // Here we are checking if the post has an image, images or video
  // and we are rendering the correct component
  // if the post has an image we are rendering a single image
  // if the post has images we are rendering a carousel
  // if the post has a video we are rendering a video player
  //
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
    content = (
      <Carousel images={post.images} onDoublePress={handleDoubleLike} />
    );
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={handleDoubleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }
  // Here we are rendering the post
  // we are using the same styles for the post
  return (
    <View style={styles.container}>
      {isShowBottomSheet && (
        <Portal>
          <BottomSheet
            style={styles.shadow}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            footerComponent={renderFooter}
            onClose={() => setIsShowBottomSheet(v => !v)}>
            <View
              style={{
                display: 'flex',
                height: '100%',
                paddingTop: 5,
              }}>
              <Text
                style={{
                  display: 'flex',
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: 10,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Comments
              </Text>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: colors.grey,
                }}></View>
              <BottomSheetFlatList
                style={{
                  paddingTop: 5,
                  paddingRight: 15,
                  paddingLeft: 15,
                }}
                data={com}
                renderItem={({item}) => <FullComment comment={item} />}
              />
              <View
                style={{
                  height: 0.5,
                  backgroundColor: colors.grey,
                }}></View>

              <View
                style={{
                  width: '100%',
                  height: 110,
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: 5,
                    marginBottom: 10,
                  }}>
                  {emojis.map((e, index) => (
                    <Text key={index} style={{fontSize: 22}}>
                      {e}
                    </Text>
                  ))}
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'grey',
                      borderRadius: 50,
                      height: 45,
                      aspectRatio: 1,
                    }}></View>
                  <TextInput
                    placeholder="Add a comment for user..."
                    style={{
                      borderWidth: 1,
                      borderColor: colors.grey,
                      borderRadius: 20,
                      padding: 10,
                      width: '71%',
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: 'grey',
                      borderRadius: 50,
                      height: 45,
                      aspectRatio: 1,
                    }}></View>
                </View>
              </View>
            </View>
          </BottomSheet>
        </Portal>
      )}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: post.user.image,
          }}
        />
        <View style={{flex: 1}}>
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
        {/** Icons */}
        <View style={styles.iconContainer}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={liked ? colors.accent : colors.black}
            onPress={handleLike}
          />
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
            style={{marginLeft: 'auto'}}
            color={colors.black}
            onPress={() => {
              setBookmarked(prev => !prev);
            }}
          />
        </View>
        {/** Likes */}
        <Text>
          Liked by <Text style={styles.bold}> someone </Text> and{' '}
          <Text style={styles.bold}> {likes} others</Text>
        </Text>
        {/** Caption */}
        <Text numberOfLines={isLargeDescription ? 0 : 3} style={styles.caption}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post?.description}{' '}
        </Text>
        {/** More */}
        <Text onPress={() => setIsLargeDescription(prev => !prev)}>
          {isLargeDescription ? 'less' : 'more'}
        </Text>
        {/** Comments */}
        <Text
          style={styles.viewComments}
          onPress={() => setIsShowBottomSheet(v => !v)}>
          {`View all ${comments} comments`}
        </Text>
        {post.comments.map(comment => {
          return <SimpleComment key={comment.id} comment={comment} />;
        })}
        {/** Post date */}
        <Text style={styles.viewComments}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default Post;
