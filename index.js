var fs = require('fs')

if (fs.existsSync("./config/config.json")) {
  require("./main.js")
} else {
  require("./src/scripts/configure.js")
}
