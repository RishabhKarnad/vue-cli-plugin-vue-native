/**
 * Vue SFC file extensions go here
 * Add more if needed
 */
const vueFileExtensions = ["vue"];

module.exports.transform = function({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
    // Transform vue SFC files
    return require("vue-native-scripts").transform({ src, filename, options });
  }

  // Transform JS files
  return require("metro-react-native-babel-transformer").transform({
    src,
    filename,
    options
  });
};
