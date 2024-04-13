import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Themes } from '../Appdata/colors';
import { SignUpButton } from '../Componets/Button';
import { NAVIGATION_NAME } from '../Appdata/NavigationName';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fonts } from '../Utility/fonts';
import { colors } from '../Utility/Color';
import InputField from '../Componets/InputField/TextField'
import CustomButton from '../Componets/CustomButton/Button';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const data = [
    { label: 'Chetu@.com', value: 'Chetu@.com' },
    { label: 'Dva@.com', value: 'Dva@.com' },
    { label: 'MPS@.com', value: 'MPS@.com' },
    { label: 'DPS@.com', value: 'DPS@.com' },
    { label: 'Amity@.com', value: 'Amity@.com' },
    { label: 'IIT Kanpur@.com	', value: 'IIT Kanpur@.com' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <ImageBackground
        source={require('../Assets/Images/bgimg.jpg')}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ marginBottom: 80 }}>
            <Text style={styles.title}>UtiCubeBox</Text>
            <Text style={styles.subtitle}>Happy to see you again!</Text>
          </View>
          <Text style={{ color: colors.NAVY_BLUE, ...fonts.ManropeBold(18), marginBottom: 10 }}>
            Select Institute
          </Text>
          <View style={styles.dropdown}>

            <Dropdown
              style={{ padding: 10, borderColor: colors.GRAY_STATE }}
              containerStyle={{ borderRadius: 5 }}
              placeholderStyle={{ color: colors.GRAY_CHARCOAL, ...fonts.ManropeBold(15) }}
              itemTextStyle={{ ...fonts.ManropeRegular(15), color: colors.GRAY_CHARCOAL }}
              selectedTextStyle={{ ...fonts.ManropeBold(15), color: colors.BLUE_DARK }}
              inputSearchStyle={{ ...fonts.ManropeMedium(15), color: colors.BLUE_DARK, borderRadius: 10 }}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select an option' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.formView}>
            <View style={styles.formSubView}>
              <Text style={{ color: colors.NAVY_BLUE, ...fonts.ManropeBold(18), }}>
                Email
              </Text>
              <InputField
                inputStyle={{ color: colors.GRAY_CHARCOAL, ...fonts.ManropeSemiBold(15) }}
                containerStyle={{ backgroundColor: colors.TRANSPARENT, borderWidth: 1, borderColor: colors.GRAY_STATE, }}
              />
            </View>
            <View style={styles.formSubView}>
              <Text style={{ color: colors.NAVY_BLUE, ...fonts.ManropeBold(18) }}>
                Password
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <InputField
                  secureTextEntry={!showPassword}
                  inputStyle={{ color: colors.GRAY_CHARCOAL, ...fonts.ManropeSemiBold(15) }}
                  containerStyle={{ backgroundColor: colors.TRANSPARENT, borderWidth: 1, borderColor: colors.GRAY_STATE, }}
                />
                <TouchableOpacity
                  style={styles.eyeiconButton}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Entypo
                    name={showPassword ? 'eye' : 'eye-with-line'}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_NAME.FORGOTPASSWORD)}>
            <Text style={styles.alreayTxt}>Forgot password ?</Text>
          </TouchableOpacity>
          <View style={styles.ButtonView}>
            <CustomButton
              title={'Login'}
              onPress={() => navigation.navigate(NAVIGATION_NAME.DASHBOARD)}
              customWidth
              textStyle={styles.buttonTextStyle}
              buttonStyle={styles.buttonViewStyle}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.GRAY_STATE,
    width: '100%',
    paddingHorizontal: '2%',
    borderRadius: 8,
    // alignSelf: 'center',
  },
  img: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    ...fonts.ManropeBold(35),
    color: Themes.AppTheme.button,
    paddingTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    ...fonts.ManropeSemiBold(15),
    color: Themes.AppTheme.black,
  },
  formView: {
    alignSelf: 'center',
    // width: '100%',
    marginTop: 20,
  },
  label: {
    color: '#000',
    fontSize: 16,
  },
  myInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: Themes.AppTheme.black,
  },
  formSubView: {
    marginBottom: 10,
  },
  tramsView: {
    flexDirection: 'row',
    marginHorizontal: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  tramsxtx: {
    width: 200,
    marginLeft: '5%',
  },
  signUpButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
  },
  txtstyle: {
    color: '#fff',
  },
  alreayTxt: {
    textAlign: 'right',
    color: colors.PRIMARY,
    ...fonts.ManropeBold(18),
    // marginTop: 10,
  },
  eyeIcon: {
    color: Themes.AppTheme.black,
    fontSize: 18,
  },
  eyeiconButton: {
    position: 'absolute',
    right: 10,
  },
  buttonTextStyle: { ...fonts.ManropeSemiBold(18), color: colors.WHITE },
  buttonViewStyle: { backgroundColor: colors.PRIMARY, padding: 10, width: '100%' },
  ButtonView: {
    marginVertical: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

// import {View} from 'native-base';
// import React, {useState} from 'react';
// import {Text, Button} from 'react-native';
// const App = () => {
//   let data = 100;
//   const fruit = val => {
//     data = 20;
//     console.warn(data);
//   };
//   return (
//     <View>
//       <Text style={{fontSize: 20}}>{data} </Text>
//       <Button title="On Press" onPress={() => fruit('Hello')} color={'green'} />
//     </View>
//   );
// };
// export default App;
