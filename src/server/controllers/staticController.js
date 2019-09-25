const os = require('os');

module.exports = {
  getUsername(req, res, next) {
      res.send({ username: os.userInfo().username });
    }
  }