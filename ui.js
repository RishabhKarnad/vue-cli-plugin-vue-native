module.exports = api => {
  api.describeConfig({
    // Unique ID for the config
    id: 'com.geekyants.vue-native.plugin.cli',
    // Displayed name
    name: 'Vue Native CLI Plugin',
    // Shown below the name
    description: 'A Vue CLI plugin to generate Vue Native apps',
    // "More info" link
    link: 'https://github.com/RishabhKarnad/vue-cli-plugin-vue-native',
    onRead: ({ data, cwd }) => ({}),
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {},
  })
}
