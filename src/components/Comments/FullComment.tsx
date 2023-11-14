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
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <View style={styles.fullComment}>
      <Image source={{ uri: comment.user.image }} style={styles.avatar} />
      <View style={styles.middleColumn}>
        <Text style={styles.user}>{comment.user.username} </Text>

        <Text style={styles.fullCommentText}>{comment.comment}</Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2d</Text>
          <Text style={styles.footerText}>5 Likes </Text>
          <Text style={styles.footerText}>Reply</Text>
        </View>
      </View>
      <Pressable onPress={handleLike} hitSlop={10}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={liked ? colors.accent : colors.black}
          size={16}
        />
      </Pressable>
    </View>
  );
};

export default FullComment;
