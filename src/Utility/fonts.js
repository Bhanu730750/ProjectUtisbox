import { Platform } from 'react-native';
import { moderateScale } from './helper';

const Fonts = {
  ManropeExtraLight: (s = 12) => {
    return {
      fontFamily: 'Manrope-ExtraLight',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '200',
        },
      }),
    };
  },
  ManropeLight: (s = 12) => {
    return {
      fontFamily: 'Manrope-Light',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '300',
        },
      }),
    };
  },
  ManropeRegular: (s = 12) => {
    return {
      fontFamily: 'Manrope-Regular',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '400',
        },
      }),
    };
  },
  ManropeMedium: (s = 12) => {
    return {
      fontFamily: 'Manrope-Medium',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '500',
        },
      }),
    };
  },
  ManropeSemiBold: (s = 12) => {
    return {
      fontFamily: 'Manrope-SemiBold',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '600',
        },
      }),
    };
  },
  ManropeBold: (s = 12) => {
    return {
      fontFamily: 'Manrope-Bold',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '700',
        },
      }),
    };
  },
  ManropeExtraBold: (s = 12) => {
    return {
      fontFamily: 'Manrope-ExtraBold',
      fontSize: moderateScale(s),
      ...Platform.select({
        android: {
          fontWeight: 'normal',
        },
        ios: {
          fontWeight: '800',
        },
      }),
    };
  },
};

export const fonts = {
  ...Fonts,
};
