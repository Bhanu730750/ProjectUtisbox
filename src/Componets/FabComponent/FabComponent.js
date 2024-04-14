import React, { Component, useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    Text,
    TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../../Utility/Color";
import AddIcon from "../../Assets/svg/AddIcon";
import { fonts } from "../../Utility/fonts";
import AddStudenIcon from "../../Assets/svg/AddStudenIcon";
import AddFaculty from "../../Assets/svg/AddFaculty";

const FabComponent = () => {
    const [_open, setOpen] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const closeFab = () => {
        if (_open) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
        setOpen(!_open)
    }
    const toggleOpen = () => {
        if (_open) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
        setOpen(!_open)
    };

    const scaleInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    const bgStyle = {
        transform: [
            {
                scale: scaleInterpolate,
            },
        ],
    };

    const reloadInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -70],
    });

    const orderInterpolate = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -70, -140],
    });

    const reloadStyle = {
        transform: [
            {
                translateY: reloadInterpolate,
            },
        ],
    };

    const orderStyle = {
        transform: [
            {
                translateY: orderInterpolate,
            },
        ],
    };
    const labelPositionInterpolate = animation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [-30, -60, -90],
    });
    const opacityInterpolate = animation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [0, 0, 1],
    });

    const labelStyle = {
        opacity: opacityInterpolate,
        transform: [
            {
                translateX: labelPositionInterpolate,
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.background, bgStyle]} />
            <TouchableWithoutFeedback onPress={closeFab}>
                <Animated.View style={[styles.button, styles.other, orderStyle]}>
                    <Animated.Text style={[styles.label, labelStyle]}>Add Faculty</Animated.Text>
                    <AddFaculty height={28} width={28} fill={colors.WHITE} />

                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={closeFab}>
                <Animated.View style={[styles.button, styles.other, reloadStyle]}>
                    <Animated.Text style={[styles.label, labelStyle]}>Add Student</Animated.Text>
                    <AddStudenIcon height={28} width={28} fill={colors.WHITE} />
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={toggleOpen}>
                <View style={[styles.button, styles.pay]}>
                    {/* <Animated.Text style={[styles.label, labelStyle]}>Pay</Animated.Text> */}
                    <AddIcon />
                    {/* <Text style={styles.payText}>$5.00</Text> */}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

}
export default FabComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: "rgba(0,0,0,.35)",
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 20,
        right: 20,
        borderRadius: 30,
    },
    button: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#333",
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: "absolute",
        bottom: 10,
        right: 20,
    },
    other: {
        backgroundColor: colors.LIGHT_PRIMARY_DARK,

    },
    payText: {
        color: "#FFF",
    },
    pay: {
        backgroundColor: colors.PRIMARY,
    },
    label: {
        width: 100,
        color: "#FFF",
        position: "absolute",
        ...fonts.ManropeSemiBold(15),
        backgroundColor: "transparent",
    },
});