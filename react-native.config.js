module.exports = {
    project: {
        ios: {},
        android: {},
        dependencies: {
            'react-native.config': {
                platforms: {
                    android: null, // disable Android platform, other platforms will still autolink
                },
            },
        },
    },
    assets: ['./src/assets/fonts'],
};