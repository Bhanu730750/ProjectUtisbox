import * as colors from '../../Utility/Color';
import { StyleSheet } from 'react-native';
import { fonts } from '../../Utility/fonts';

//@ts-ignore
const styles = StyleSheet.create({
  buttonStyle: (customWidth) => ({
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    width: customWidth ? null : '100%',
    borderRadius: 6
  }),
  textStyle: {
    color: colors.white,
    textAlign: 'center',
    ...fonts.ManropeSemiBold(14),
  },
  innerButtonV1: {
    flexDirection: 'row',
  },
  innerButtonV2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
