import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 50,
    width: 100,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: colors.black,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  root: {
    padding: 10,
  },
  username: {
    fontWeight: fonts.weight.bold,
  },
});
