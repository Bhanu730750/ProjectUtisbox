import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const Header = ({
  title,
  isBack,
  isRight,
  subTitle,
  onBackPress,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.leftButtonContainer]}>
        {isBack && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButtonView}>
            <LeftIcon />
          </TouchableOpacity>
        )}
      </View>

      <View style={[styles.centerContainer]}>
        <Text numberOfLines={1} style={[styles.titleView, titleStyle]}>
          {title}
        </Text>
        {subTitle && (
          <Text numberOfLines={1} style={styles.subTitleView}>
            {subTitle}
          </Text>
        )}
      </View>
      {/* <View style={styles.rightButtonContainer}>
        {isRight && (
          <View style={styles.backButtonView}>
            <TouchableOpacity>
              <RightIcon />
            </TouchableOpacity>
          </View>
        )}
      </View> */}
    </View>
  );
};
export default Header;
