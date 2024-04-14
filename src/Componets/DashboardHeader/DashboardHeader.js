import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts } from '../../Utility/fonts';
import BellIcon from '../../Assets/svg/BellIcon';
import { colors } from '../../Utility/Color';
import SearchIcon from '../../Assets/svg/Search';

const DashboardHeader = ({
  img,
  navigation,
  title,
  onOpenNotification,
  headerContainerStyle,
}) => {
  const insets = useSafeAreaInsets();
  const name =
    title &&
    title
      .split(',', 2)[0]
      .split(' ', 2)
      .reduce((res, word) => res + word[0], '');
  return (
    <View style={[styles.container(insets), headerContainerStyle]}>
      <View style={[styles.container(insets)]}>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => { }}
        >
          <Image
            source={img}
            resizeMode="stretch"
            style={{

              borderRadius: 30,
              height: 50,
              width: 50,
            }}>
          </Image>
          {/* <Text style={{ ...fonts.ManropeRegular(16) }}>{name}</Text> */}
          {/* </View> */}
          {/* <Text style={styles.headerTitle}>{title}</Text> */}
        </TouchableOpacity>
        <View
          style={styles.notificationView}
        >
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 8,
            marginRight: 15,

          }}>
            <SearchIcon height={30} width={30} fill={colors.GRAY_SILVER} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginRight: 30,

          }}>
            <BellIcon height={30} width={30} fill={colors.GRAY_SILVER} />
          </TouchableOpacity>
          {/* {notificationData && notificationData?.unreadCount > 0 && (
            <Badge
              value={
                notificationData?.unreadCount > 100
                  ? '99+'
                  : notificationData.unreadCount
              }
              badgeStyle={{ backgroundColor: colors.RED }}
              containerStyle={styles.badgeNotificationView}
            />

          )} */}
        </View>
      </View>
    </View>
  );
};
export default DashboardHeader;
