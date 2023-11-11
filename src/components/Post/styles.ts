import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/fonts/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  greyBackground: {
    backgroundColor: 'grey',
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
    height: 35,
    marginRight: 10,
    width: 35,
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
  location: {
    color: colors.grey,
    fontSize: fonts.size.s,
  },
  commentText: {
    flex: 1,
    lineHeight: 16,
  },
});
