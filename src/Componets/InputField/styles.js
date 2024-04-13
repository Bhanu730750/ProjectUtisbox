
import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../Utility/helper';
import { colors } from '../../Utility/Color';
import { fonts } from '../../Utility/fonts';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(6),
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.GRAY_SILVER,
    marginVertical: verticalScale(5),
  },
  input: {
    height: moderateScale(46),
    width: '100%',
    color: colors.GRAY_CHARCOAL,
    ...fonts.ManropeMedium(14),
  },
});

export default styles;
