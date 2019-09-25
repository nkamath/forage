const path = require("path");

module.exports = {
    init(app){

        app.use((req,res,next) => {
            res.locals.currentUser = req.user;
            next();
          })     
     }
  };
  