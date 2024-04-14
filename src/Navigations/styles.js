import { StyleSheet } from 'react-native';
import { moderateScale } from '../Utility/helper';


const styles = StyleSheet.create({
  containerStyle: {
    padding: moderateScale(2),
    width: moderateScale(48),
    aspectRatio: 1,
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  shadowStyle: {
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 3,
  },
});

export default styles;
