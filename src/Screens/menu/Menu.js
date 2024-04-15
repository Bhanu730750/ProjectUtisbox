import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../../Utility/Color";
import Header from "../../Componets/Header/Header";
import { fonts } from "../../Utility/fonts";
const Menu = () => {
    return (
        <SafeAreaView style={{ backgroundColor: colors.WHITE, flex: 1 }}>
            <Header containerStyle={{ backgroundColor: colors.PRIMARY }} titleStyle={{ color: colors.WHITE }} title={'Menu'} />
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 100 }}
                        resizeMode="stretch"
                        source={require('../../Assets/Images/university.jpg')}
                    />
                    <TouchableOpacity>
                        <Text style={{ ...fonts.ManropeSemiBold(16), marginTop: 10, color: colors.PRIMARY_LIGHT }}>View Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: colors.WHITE, borderRadius: 10, padding: 10, marginHorizontal: 10, elevation: 2 }}>
                    <View style={{ backgroundColor: colors.GRAY_LIGHT, padding: 10, marginVertical: 5 }}>
                        <Text style={{ ...fonts.ManropeBold(20) }}>Text 1</Text>
                    </View>
                    <View style={{ backgroundColor: colors.GRAY_LIGHT, padding: 10, marginVertical: 5 }}>
                        <Text style={{ ...fonts.ManropeBold(20) }}>Text 1</Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}
export default Menu;