import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/theme/colors';
import { IComment } from '../../types/interfaces';
import styles from './styles';

interface ICommentProps {
  comment: IComment;
}

const SimpleComment = ({ comment }: ICommentProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(prev => !prev);
  };
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign
        onPress={handleLike}
        name={liked ? 'heart' : 'hearto'}
        style={styles.icon}
        color={liked ? colors.accent : colors.black}
      />
    </View>
  );
};

export default SimpleComment;
