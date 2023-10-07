import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import data from '../../assets/data/data';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/theme/colors';

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: data.avatar,
          }}
        />
        <Text style={styles.userName}>{data.name}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          style={styles.threeDots}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: data.img,
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
          Liked by <Text style={styles.bold}>{data.name}</Text> and{' '}
          <Text style={styles.bold}> 66 others</Text>
        </Text>
        {/** Caption */}
        <Text style={styles.caption}>
          <Text style={styles.bold}>{data.name}</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores reprehenderit dolorum
          nisi magnam facere eaque, dicta laudantium neque earum ad, facilis qui
          possimus inventore temporibus a itaque iste. Accusantium, quaerat.
        </Text>
        {/** Comments */}
        <Text style={styles.viewComments}>View all 10 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{data.name} </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>
        {/** Post date */}
        <Text style={styles.viewComments}>2 hours ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  threeDots: {
    marginLeft: 'auto',
  },
  userAvatar: {
    borderRadius: 50,
    height: 50,
    marginRight: 10,
    width: 50,
  },
  userName: {
    color: colors.black,
    fontWeight: fonts.weight.bold,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  caption: {
    marginVertical: 5,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  viewComments: {
    color: colors.grey,
    marginVertical: 5,
  },
  commentText: {
    flex: 1,
    lineHeight: 18,
  },
});

export default Post;
