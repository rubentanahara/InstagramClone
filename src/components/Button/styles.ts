import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    //border
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    //alignment
    flex: 1,
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
