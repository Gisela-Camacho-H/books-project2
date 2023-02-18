const {requiresAuth} = require('express-openid-connect');

var getProfile = (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
  }

module.exports = {
    requiresAuth,
    getProfile
  };