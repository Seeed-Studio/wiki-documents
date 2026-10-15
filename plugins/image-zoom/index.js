const path = require('path');

module.exports = function imageZoomPlugin() {
  return {
    name: 'seeed-image-zoom',

    getClientModules() {
      return [path.resolve(__dirname, './zoom')];
    },
  };
};
