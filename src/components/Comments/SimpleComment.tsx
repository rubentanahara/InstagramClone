import React, { useState, FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/theme/colors';
import { IComment } from '../../types/interfaces';
import styles from './styles';

interface ICommentProps {
  comment: IComment;
}

const SimpleComment: FunctionComponent<ICommentProps> = ({ comment }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = (): void => {
    setLiked((prev) => !prev);
  };

  const HEART_ICON = liked ? 'heart' : 'hearto';
  const ICON_COLOR = liked ? colors.accent : colors.black;

  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign
        onPress={handleLike}
        name={HEART_ICON}
        style={styles.icon}
        color={ICON_COLOR}
      />
    </View>
  );
};

export default SimpleComment;
