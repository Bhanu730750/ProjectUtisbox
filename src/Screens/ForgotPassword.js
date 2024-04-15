import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import { Themes } from '../Appdata/colors';
import { SignUpButton } from '../Componets/Button';
import { NAVIGATION_NAME } from '../Appdata/NavigationName';
import { forgetPassRequest, loginRequest } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Componets/Loader';
import { fonts } from '../Utility/fonts';
import { colors } from '../Utility/Color';
import InputField from '../Componets/InputField/TextField';
import CustomButton from '../Componets/CustomButton/Button';
import { Dropdown } from 'react-native-element-dropdown';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
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


          <View style={{ marginVertical: 50 }}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>We will send you a link to reset your password. Enter your email address</Text>
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
              placeholder={!isFocus ? 'Select an option' : ''}
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
          </View>
          <View style={styles.ButtonView}>
            <CustomButton
              title={'Submit'}
              onPress={() => { }}
              customWidth
              textStyle={styles.buttonTextStyle}
              buttonStyle={styles.buttonViewStyle}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.PRIMARY, ...fonts.ManropeBold(18) }}>Password reset link sent.</Text>
            <Text onPress={() => navigation.goBack()} style={{ color: colors.PRIMARY_LIGHT, ...fonts.ManropeBold(18) }}>Click here to login.</Text>

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
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    ...fonts.ManropeBold(35),
    color: Themes.AppTheme.button,
    marginBottom: 10

  },
  subtitle: {
    textAlign: 'center',
    ...fonts.ManropeSemiBold(15),
    color: colors.GRAY_STEEL,
  },
  formView: {
    alignSelf: 'center',
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
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonTextStyle: { ...fonts.ManropeSemiBold(18), color: colors.WHITE },
  buttonViewStyle: { backgroundColor: colors.PRIMARY, padding: 10, width: '100%' },
  ButtonView: {
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

/* Add Subject
   Math, science,
   Below Subject list
*/

/* Add Class
   Class name enter
   Add Division
    A,B,C,D,E
   Below Class list
*/

/* Add Faculty
image
name
emailid
mobile
gender
---------
select subject
   select Math
select Class
   multi select
   8 class
   9 class
   10 class
*/

/* Add Student
  image
  name
  mobile
  email id
  gender
  roll no
  -------------
  select Class
    select 8th
  Select Division
    section A
    Section B
*/

