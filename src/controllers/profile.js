const {auth, requiresAuth} = require('express-openid-connect');
require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET
  };


  const isUserAuthenticaded = async (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in': 'logged out')
};

const getProfile = async (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
  }


module.exports = {
    auth,
    requiresAuth,
    config,
    isUserAuthenticaded,
    getProfile
  };