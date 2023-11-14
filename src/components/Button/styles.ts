import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    //border
    borderColor: colors.border,
    borderRadius: 5,
    borderWidth: 1,
    //alignment
    flex: 1,
    margin: 5,
    padding: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
