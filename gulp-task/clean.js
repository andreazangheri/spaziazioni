// packages
const del = require('del');

// Clean
function clean() {
  return del(['./css/main.css']);
}

// exports
module.exports = {
  clean: clean
};
