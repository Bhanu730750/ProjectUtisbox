/**
 * A reusable button component for React Native.
 *
 * This component provides a customizable button that can be used throughout
 * the application.
 *
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { white } from '../../Utility/Color';

const CustomButton = ({
  ref,
  title,
  isLoading = false,
  textStyle,
  buttonStyle,
  onPress,
  customWidth = false,
  rightIcon,
  disable = false,
}) => {
  // Rendering
  return (
    // JSX for rendering the component
    <TouchableOpacity
      ref={ref}
      disabled={isLoading || disable}
      style={[styles.buttonStyle(customWidth), buttonStyle]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {isLoading ? (
        <View style={styles.innerButtonV1}>
          <Text
            style={[styles.textStyle, textStyle]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.1}
          >
            {title}
          </Text>
          <ActivityIndicator color={white} size={'small'} />
        </View>
      ) : (
        <View style={styles.innerButtonV2}>
          {customWidth && rightIcon}
          <Text style={[styles.textStyle, textStyle]} numberOfLines={1}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
