const validator = require('../helpers/validator');

const saveUser = (req, res, next) => {
  const validationRule = {

    name: 'required|string',
    last_name: 'required|string',
    nickname: 'string',
    email: 'required|email',
    password: 'required|string',
    phone: 'string',
    birthday: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveBook = (req, res, next) => {
    const validationRule = {
  
    title: 'required|string',
    description: 'string',
    author: 'required|string',
    imagePath: 'required|string',
    details: 'string',
    aboutAuthor: 'string',
    categories: 'required|string',
    imageAuthor: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveUser,
  saveBook
};
