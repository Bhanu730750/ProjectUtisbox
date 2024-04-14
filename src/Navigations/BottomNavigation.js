import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Utility/Color';
import { screenHeight } from '../Utility/helper';
import { NAVIGATION_NAME } from '../Appdata/NavigationName';
import Dashboard from '../Screens/Dashboard';
import styles from './styles';
import ManagementIcon from '../Assets/svg/ManagementIcon'
import ResultIcon from '../Assets/svg/ResultIcon'
import TutorialIcon from '../Assets/svg/TutorialIcon';
import { fonts } from '../Utility/fonts';
import ReportActiveIcon from '../Assets/svg/ReportActiveIcon';
import MenuActiveIcon from '../Assets/svg/MenuActiveIcon';
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: screenHeight(13),
                    paddingHorizontal: 5,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
            }}
        >
            <Tab.Screen
                name={NAVIGATION_NAME.DASHBOARD}
                component={Dashboard}
                options={{
                    unmountOnBlur: true,
                    header: () => null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View
                                    style={[
                                        styles.containerStyle,
                                        {
                                            backgroundColor: focused
                                                ? colors.PRIMARY
                                                : colors.WHITE,
                                        },
                                    ]}
                                >
                                    {focused ? <ManagementIcon height={25} width={25} fill={colors.WHITE} /> : <ManagementIcon height={25} width={25} fill={colors.PRIMARY} />}
                                </View>
                                <Text
                                    style={{
                                        ...fonts.ManropeSemiBold(10),
                                        top: 5,
                                        color: colors.NAVY_BLUE,
                                    }}
                                >
                                    {NAVIGATION_NAME.MANAGEMENT}
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={NAVIGATION_NAME.RESULT}
                component={Dashboard}
                options={{
                    unmountOnBlur: true,
                    header: () => null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View
                                    style={[
                                        styles.containerStyle,
                                        {
                                            backgroundColor: focused
                                                ? colors.PRIMARY
                                                : colors.WHITE,
                                        },
                                    ]}
                                >
                                    {focused ? <ResultIcon height={25} width={25} fill={colors.WHITE} /> : <ResultIcon height={25} width={25} fill={colors.PRIMARY} />}
                                </View>
                                <Text
                                    style={{
                                        ...fonts.ManropeSemiBold(10),
                                        top: 5,
                                        color: colors.NAVY_BLUE,
                                    }}
                                >
                                    {NAVIGATION_NAME.RESULT}
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={NAVIGATION_NAME.TUTORIAL}
                component={Dashboard}
                options={{
                    unmountOnBlur: true,
                    header: () => null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View
                                    style={[
                                        styles.containerStyle,
                                        focused && styles.shadowStyle,
                                        {
                                            backgroundColor: focused
                                                ? colors.PRIMARY
                                                : colors.WHITE,
                                        },
                                    ]}
                                >
                                    {focused ? <TutorialIcon height={25} width={25} fill={colors.WHITE} /> : <TutorialIcon height={25} width={25} fill={colors.PRIMARY} />}
                                </View>
                                <Text
                                    style={{
                                        ...fonts.ManropeSemiBold(10),
                                        top: 5,
                                        color: colors.NAVY_BLUE,
                                    }}
                                >
                                    {NAVIGATION_NAME.TUTORIAL}
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={NAVIGATION_NAME.REPORTS}
                component={Dashboard}
                initialParams={{ isBack: false }}
                options={{
                    unmountOnBlur: true,
                    header: () => null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View
                                    style={[
                                        styles.containerStyle,
                                        {
                                            backgroundColor: focused
                                                ? colors.PRIMARY
                                                : colors.WHITE,
                                        },
                                    ]}
                                >
                                    {focused ? <ReportActiveIcon height={25} width={25} fill={colors.WHITE} /> : <ReportActiveIcon height={25} width={25} fill={colors.PRIMARY} />}
                                </View>
                                <Text
                                    style={{
                                        ...fonts.ManropeSemiBold(10),
                                        top: 5,
                                        color: colors.NAVY_BLUE,
                                    }}
                                >
                                    {NAVIGATION_NAME.REPORTS}
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={NAVIGATION_NAME.MENU}
                component={Dashboard}
                // listeners={{
                //     tabPress: (e) => {
                //         // Prevent default action
                //         // props?.navigation.toggleDrawer();
                //         // e.preventDefault();
                //     },
                // }}
                options={{
                    unmountOnBlur: true,
                    header: () => null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View
                                    style={[
                                        styles.containerStyle,
                                        {
                                            backgroundColor: focused
                                                ? colors.PRIMARY
                                                : colors.WHITE,
                                        },
                                    ]}
                                >
                                    {focused ? <MenuActiveIcon height={25} width={25} fill={colors.WHITE} /> : <MenuActiveIcon height={28} width={28} fill={colors.PRIMARY} />}

                                </View>
                                <Text
                                    style={{
                                        ...fonts.ManropeSemiBold(10),
                                        top: 5,
                                        color: colors.NAVY_BLUE,
                                    }}
                                >
                                    {NAVIGATION_NAME.MENU}
                                </Text>
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
