import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 100,
    width: '30%',
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  label: {
    width: 75,
  },
  page: {
    alignItems: 'center',
    padding: 10,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
});
