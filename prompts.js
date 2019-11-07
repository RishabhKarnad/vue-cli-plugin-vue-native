module.exports = [
  {
    name: 'projectName',
    type: 'input',
    message: 'What do you wish to name the project directory?',
  },
  {
    name: 'appName',
    type: 'input',
    message: 'What do you wish to call your app?',
  },
  {
    name: 'useExpo',
    type: 'list',
    message:
      'What distribution of React Native do you wish to use under the hood?',
    choices: [
      { name: 'Expo', value: true },
      { name: 'Bare React Native', value: false },
    ],
    default: false,
  },
]
