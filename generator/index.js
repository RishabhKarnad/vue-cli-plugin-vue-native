module.exports = (api, options, preset) => {
  if (options.useExpo) {
    // For Expo based projects
    api.extendPackage({
      scripts: {
        start: 'expo start',
        android: 'expo start --android',
        ios: 'expo start --ios',
      },
      dependencies: {
        expo: '^35.0.0',
        react: '16.8.3',
        'react-native':
          'https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz',
      },
      devDependencies: {
        '@babel/core': '^7.0.0',
        'babel-preset-expo': '^6.0.0',
      },
    })
  } else {
    // For bare React Native based projects
    api.extendPackage({
      scripts: {
        start: 'react-native start',
        android: 'react-native run-android',
        ios: 'react-native run-ios',
      },
      dependencies: {
        react: '^16.8.6',
        'react-native': '~0.60.0',
      },
      devDependencies: {
        '@babel/core': '^7.0.0',
        '@babel/runtime': '^7.5.5',
        'metro-react-native-babel-preset': '^0.56.0',
      },
    })
  }

  // Add Vue Native dependencies
  api.extendPackage({
    dependencies: {
      'vue-native-core': '~0.1.0',
      'vue-native-helper': '~0.1.0',
    },
    devDependencies: {
      'vue-native-scripts': '~0.1.0',
    },
  })

  api.render('./templates/basic')
}
