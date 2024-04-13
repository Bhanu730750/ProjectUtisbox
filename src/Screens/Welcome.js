import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
// import { Button } from '../Componets/Button';
import { Themes } from '../Appdata/colors';
import { NAVIGATION_NAME } from '../Appdata/NavigationName';
import CustomButton from '../Componets/CustomButton/Button';
import { fonts } from '../Utility/fonts';
import { colors } from '../Utility/Color';

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={require('../Assets/Images/bgimg.jpg')}
      style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>UtiCubeBox</Text>
      <View style={styles.ButtonView}>
        <CustomButton
          title={'Login'}
          onPress={() => navigation.navigate(NAVIGATION_NAME.LOGIN)}
          customWidth
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonViewStyle}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonstyle: {
    width: '100%',
    height: 40,
    backgroundColor: Themes.AppTheme.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBlockColor: Themes.AppTheme.textColor,
  },
  txtstyle: {
    color: Themes.AppTheme.textColor,
  },
  ButtonView: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    ...fonts.ManropeBold(35),
    color: Themes.AppTheme.button,
  },
  buttonTextStyle: { ...fonts.ManropeSemiBold(18), color: colors.WHITE },
  buttonViewStyle: { backgroundColor: colors.PRIMARY, padding: 10, width: '90%' },
});
