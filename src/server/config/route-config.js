const staticRoutes = require("../routes/static");

module.exports = {
    init(app){
      app.use(staticRoutes);

      // send the user to index html page if no other URL makes sense. 
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
      });
    }
  }