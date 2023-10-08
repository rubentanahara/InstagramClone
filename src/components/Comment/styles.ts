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
    flex: 1,
    lineHeight: 16,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
});
