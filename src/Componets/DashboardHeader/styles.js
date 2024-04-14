import { StyleSheet, Platform } from 'react-native';
import { horizontalScale, moderateScale } from '../../Utility/helper';
import { fonts } from '../../Utility/fonts';
import { colors } from '../../Utility/Color';

const styles = StyleSheet.create({
  container: (insets) => ({
    height: Platform.OS == 'android' ? insets.top + 60 : 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: horizontalScale(10),
  },
  logoView: {
    height: moderateScale(41),
    width: moderateScale(41),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.GRAY_STATE,
  },
  headerTitle: {
    marginLeft: horizontalScale(5),
    color: colors.BLACK,
    ...fonts.ManropeSemiBold(16),
  },
  notificationView: {
    height: moderateScale(41),
    width: moderateScale(41),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  badgeNotificationView: {
    position: 'absolute',

    backgroundColor: colors.RED,
    borderRadius: 999,
    top: 2,
    left: horizontalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundView: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: colors.GRAY_SILVER,
    borderWidth: 1,
    borderColor: colors.GRAY_STATE,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -25,
  },
});

export default styles;
