const express = require("express");
const app = express();
const mainConfig = require("./config/main-config.js");
const apiConfig = require("./config/api-config.js");

mainConfig.init(app, express);
apiConfig.init(app);

app.use(express.static('dist'));
module.exports = app;
