import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/fonts/fonts';

export default StyleSheet.create({
  bold: {
    fontWeight: fonts.weight.bold,
  },
  caption: {
    lineHeight: 18,
    marginVertical: 5,
  },
  comment: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentText: {
    flex: 1,
    lineHeight: 16,
  },
  container: {
    flex: 1,
  },
  footer: {
    padding: 10,
  },
  greyBackground: {
    backgroundColor: 'grey',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderRadius: 12,
    color: 'white',
    marginBottom: 12,
    marginHorizontal: 12,
    padding: 12,
    textAlign: 'center',
  },
  location: {
    color: colors.grey,
    fontSize: fonts.size.s,
  },
  shadow: {
    elevation: 24,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,

    shadowRadius: 16.0,
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
  viewComments: {
    color: colors.grey,
    marginVertical: 5,
  },
});
