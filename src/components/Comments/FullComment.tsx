import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/theme/colors';
import { IComment } from '../../types/interfaces';
import styles from './styles';

interface ICommentProps {
  comment: IComment;
}

const FullComment: React.FC<ICommentProps> = ({ comment }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = (): void => {
    setLiked((prev) => !prev);
  };

  const { user, comment: userComment } = comment;
  const HEART_ICON = liked ? 'heart' : 'hearto';
  const HEART_COLOR = liked ? colors.accent : colors.black;

  return (
    <View style={styles.fullComment}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <View style={styles.middleColumn}>
        <Text style={styles.user}>{user.username}</Text>
        <Text style={styles.fullCommentText}>{userComment}</Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2d</Text>
          <Text style={styles.footerText}>5 Likes</Text>
          <Text style={styles.footerText}>Reply</Text>
        </View>
      </View>
      <Pressable onPress={handleLike} hitSlop={10}>
        <AntDesign
          name={HEART_ICON}
          style={styles.icon}
          color={HEART_COLOR}
          size={16}
        />
      </Pressable>
    </View>
  );
};

export default FullComment;
