/* eslint-disable @typescript-eslint/explicit-function-return-type */
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultFooterProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter/types';
import { Portal } from '@gorhom/portal';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import com from '../../assets/data/comments.json';
import colors from '../../assets/theme/colors';
import { IPost } from '../../types/interfaces';
import Carousel from '../Carousel';
import { FooterReplyInput, FullComment, SimpleComment } from '../Comments';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';
import styles from './styles';

interface IPostProps {
  post: IPost;
  isVisible: boolean;
}

const Post: React.FC<IPostProps> = ({ post, isVisible }) => {
  // this is are the states for the post
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [likes, setLikes] = useState(post.nofLikes);
  const [comments] = useState(post.nofComments);
  const [isLargeDescription, setIsLargeDescription] = useState<boolean>(false);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['80%'], []);

  // this is the handler for the double press
  const handleDoubleLike = (): void => {
    if (liked) return;
    setLiked((prev) => !prev);
    setLikes((prev) => prev + 1);
  };
  // this is the handler for the single press
  const handleLike = (): void => {
    setLiked((prev) => !prev);
    setLikes((prev) => prev + (liked ? -1 : 1));
  };
  // renders
  const renderFooter = useCallback(
    (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultFooterProps) => (
      <BottomSheetFooter {...props}>
        <FooterReplyInput />
      </BottomSheetFooter>
    ),
    []
  );

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
            onClose={() => setIsShowBottomSheet((v) => !v)}
          >
            <Text
              style={{
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                paddingBottom: 10,
              }}
            >
              Comments
            </Text>
            <View
              style={{
                height: 0.5,
                backgroundColor: colors.grey,
              }}
            ></View>
            <View
              style={{
                height: '70%',
              }}
            >
              <BottomSheetFlatList
                style={{
                  paddingTop: 10,
                  paddingHorizontal: 15,
                }}
                showsVerticalScrollIndicator={false}
                data={com}
                renderItem={({ item }): React.JSX.Element => (
                  <FullComment comment={item} />
                )}
              />
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
        <View style={{ flex: 1 }}>
          <Text style={styles.userName}>{post.user.username}</Text>
          <Text style={styles.location}>{post?.location}</Text>
        </View>
        <Entypo
          name='dots-three-horizontal'
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
            name='chatbubble-outline'
            size={24}
            style={styles.icon}
            color={colors.black}
            onPress={() => setIsShowBottomSheet((v) => !v)}
          />
          <Feather
            name='send'
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
            style={{ marginLeft: 'auto' }}
            color={colors.black}
            onPress={() => {
              setBookmarked((prev) => !prev);
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
        <Text onPress={() => setIsLargeDescription((prev) => !prev)}>
          {isLargeDescription ? 'less' : 'more'}
        </Text>
        {/** Comments */}
        <Text
          style={styles.viewComments}
          onPress={() => setIsShowBottomSheet((v) => !v)}
        >
          {`View all ${comments} comments`}
        </Text>
        {post.comments.map((comment) => {
          return <SimpleComment key={comment.id} comment={comment} />;
        })}
        {/** Post date */}
        <Text style={styles.viewComments}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default Post;
