// Import
const path = require("path");

module.exports = {
  chainWebpack: config => {
    // Alias config
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("@components", path.resolve(__dirname, "src/components"))
      .set("@vies", path.resolve(__dirname, "src/views"))
      .set("@assets", path.resolve(__dirname, "src/assets"))
      .set("@scss", path.resolve(__dirname, "src/assets/scss"))
      .set("@images", path.resolve(__dirname, "src/assets/images"))
      .set("@fonts", path.resolve(__dirname, "src/assets/fonts"));
  }
};
