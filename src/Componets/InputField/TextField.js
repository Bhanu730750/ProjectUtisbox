/**
 * A reusable InputField component for React Native.
 *
 * This component provides a customizable TextInput that can be used throughout
 * the application.
 *
 */

import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import { colors } from '../../Utility/Color';


const InputField = ({
  containerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        {
          paddingLeft: leftIcon ? '0%' : '4%',
          paddingRight: rightIcon ? '0%' : '4%',
        },
      ]}
    >
      {leftIcon}
      <TextInput
        {...rest}
        placeholderTextColor={colors.GRAY_STEEL}
        style={[
          styles.input,
          inputStyle,
          { width: leftIcon ?? rightIcon ? '90%' : '100%' },
        ]}
      />
      {rightIcon}
    </View>
  );
};

export default React.memo(InputField);
