import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/fonts/fonts';

export default StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 25,
    width: 40,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },

  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginHorizontal: 10,
  },
  fullComment: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullCommentText: {
    color: colors.black,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  location: {
    color: colors.grey,
    fontSize: fonts.size.s,
  },
  middleColumn: {
    flex: 1,
    marginHorizontal: 10,
  },
  user: {
    fontWeight: fonts.weight.bold,
  },
  viewComments: {
    color: colors.grey,
    marginVertical: 5,
  },
});
