import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/fonts/fonts';

export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  viewComments: {
    color: colors.grey,
    marginVertical: 5,
  },
  location: {
    color: colors.grey,
    fontSize: fonts.size.s,
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
  fullComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  fullCommentText: {
    color: colors.black,
    lineHeight: 18,
    marginHorizontal: 10,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginHorizontal: 10,
  },
});
