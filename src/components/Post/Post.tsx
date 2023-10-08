import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/interfaces';

interface IPostProps {
  post: IPost;
}

const Post = ({post}: IPostProps) => {
  return (
    <View style={styles.container}>
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
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
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
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text>
          Liked by <Text style={styles.bold}> someone </Text> and{' '}
          <Text style={styles.bold}> {post?.nofLikes} others</Text>
        </Text>
        {/** Caption */}
        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.caption}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {post?.description}{' '}
        </Text>
        {/** Comments */}
        <Text style={styles.viewComments}>
          {`View all ${post.nofComments} comments`}
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
