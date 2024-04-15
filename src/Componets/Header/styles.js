import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, screenWidth } from '../../Utility/helper';
import { fonts } from '../../Utility/fonts';
import { colors } from '../../Utility/Color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.GRAY_SILVER,
    width: screenWidth(100),
    height: moderateScale(50),
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
  leftButtonContainer: {
    width: horizontalScale(50),
    height: moderateScale(50),
    position: 'absolute',
    left: 15,
    justifyContent: 'center',
  },
  rightButtonContainer: {
    width: horizontalScale(50),
    height: moderateScale(50),
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
  },
  centerContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonView: {
    flex: 1,
    justifyContent: 'center',
  },
  titleView: {
    textAlign: 'center',
    ...fonts.ManropeMedium(16),
    color: colors.GRAY_CHARCOAL,
    width: '100%',
  },
  subTitleView: {
    color: colors.GRAY_STEEL,
    textAlign: 'center',
    ...fonts.ManropeMedium(12),
  },
});

export default styles;
