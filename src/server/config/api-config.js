const staticRoutes = require("../routes/static");
const path = require ('path');

module.exports = {
    init(app){
      app.use(staticRoutes);
    }
  }