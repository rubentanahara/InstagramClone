import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import colors from '../../assets/theme/colors';
import {IComment} from '../../types/interfaces';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username} </Text>
          {comment.comment}
        </Text>
        <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
      </View>
    </>
  );
};

export default Comment;
